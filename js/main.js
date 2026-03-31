(function ($) {
    "use strict";

    var themeStorageKey = 'olange-theme';
    var colorSchemeQuery = window.matchMedia('(prefers-color-scheme: dark)');

    function readStoredTheme() {
        try {
            return localStorage.getItem(themeStorageKey);
        } catch (error) {
            return null;
        }
    }

    function writeStoredTheme(theme) {
        try {
            localStorage.setItem(themeStorageKey, theme);
        } catch (error) {
            return;
        }
    }

    function getPreferredTheme() {
        var storedTheme = readStoredTheme();
        if (storedTheme === 'light' || storedTheme === 'dark') {
            return storedTheme;
        }

        return colorSchemeQuery.matches ? 'dark' : 'light';
    }

    function updateThemeToggle(theme) {
        $('.theme-toggle').attr('aria-pressed', theme === 'dark');
    }

    function applyTheme(theme) {
        document.documentElement.setAttribute('data-theme', theme);
        document.documentElement.style.colorScheme = theme;
        updateThemeToggle(theme);
    }

    applyTheme(getPreferredTheme());

    $('.theme-toggle').on('click', function () {
        var nextTheme = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
        writeStoredTheme(nextTheme);
        applyTheme(nextTheme);
    });

    if (typeof colorSchemeQuery.addEventListener === 'function') {
        colorSchemeQuery.addEventListener('change', function (event) {
            if (!readStoredTheme()) {
                applyTheme(event.matches ? 'dark' : 'light');
            }
        });
    }

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.sticky-top').addClass('shadow-sm').css('top', '0px');
        } else {
            $('.sticky-top').removeClass('shadow-sm').css('top', '-120px');
        }
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });


    // Portfolio isotope and filter
    var portfolioContainer = $('.portfolio-container');
    if (portfolioContainer.length) {
        var portfolioIsotope = portfolioContainer.isotope({
            itemSelector: '.portfolio-item',
            layoutMode: 'fitRows'
        });

        $('#portfolio-flters li').on('click', function () {
            $("#portfolio-flters li").removeClass('active');
            $(this).addClass('active');

            portfolioIsotope.isotope({filter: $(this).data('filter')});
        });
    }


    // Testimonials carousel
    if ($(".testimonial-carousel").length) {
        $(".testimonial-carousel").owlCarousel({
            autoplay: true,
            smartSpeed: 1000,
            items: 1,
            dots: false,
            loop: true,
            nav: true,
            navText : [
                '<i class="bi bi-chevron-left"></i>',
                '<i class="bi bi-chevron-right"></i>'
            ]
        });
    }

    var quoteCategoryChoices = document.getElementById('quoteCategoryChoices');
    if (quoteCategoryChoices) {
        var quoteForm = quoteCategoryChoices.closest('form');
        var categorySelect = document.getElementById('category');
        var serviceSelect = document.getElementById('service');
        var supplySelect = document.getElementById('supply');
        var requestStage = document.getElementById('requestStage');
        var quoteOptionGrid = document.getElementById('quoteOptionGrid');
        var quoteOptionHelper = document.getElementById('quoteOptionHelper');
        var selectionSummary = document.getElementById('selectionSummary');
        var requestTypeInput = document.getElementById('requestType');
        var serviceContainer = document.getElementById('serviceContainer');
        var supplyContainer = document.getElementById('supplyContainer');

        var quoteOptionMeta = {
            Services: {
                'Construction Services': { icon: 'fas fa-hard-hat', copy: 'Site development, construction support, and infrastructure work.' },
                'Lawn Maintenance': { icon: 'fas fa-seedling', copy: 'Routine lawn care for neat, healthy outdoor spaces.' },
                'Hedge Trimming': { icon: 'fas fa-cut', copy: 'Structured trimming to keep landscapes tidy and controlled.' },
                'House Cleaning': { icon: 'fas fa-home', copy: 'Dependable cleaning support for homes and living spaces.' },
                'Land Preparation': { icon: 'fas fa-drafting-compass', copy: 'Ground clearing and preparation ahead of landscaping or building.' },
                'General Cleaning': { icon: 'fas fa-broom', copy: 'Flexible cleaning support for everyday upkeep and maintenance.' },
                'Grass Planting': { icon: 'fas fa-seedling', copy: 'Planting and establishment support for greener lawns.' },
                'Tree & Shrub Removal': { icon: 'fas fa-tree', copy: 'Safe removal of unwanted or hazardous trees and shrubs.' },
                'Garden Designing': { icon: 'fas fa-pencil-ruler', copy: 'Layout and planning support for attractive outdoor spaces.' },
                'Tree Trimming': { icon: 'fas fa-tree', copy: 'Targeted trimming for healthier, safer, better-shaped trees.' },
                'Pharmaceutical Cleaning': { icon: 'fas fa-prescription-bottle-alt', copy: 'Specialized cleaning for sensitive regulated environments.' },
                'Office Cleaning Supplies': { icon: 'fas fa-building', copy: 'Cleaning support tailored for office and workspace environments.' },
                'Business Form Printing': { icon: 'fas fa-print', copy: 'Printed business materials and form production support.' },
                'Public Sector Services': { icon: 'fas fa-landmark', copy: 'Practical service support for institutions and public-facing operations.' },
                'Editorial & Fine Art Services': { icon: 'fas fa-palette', copy: 'Creative editorial, visual, and design-focused service work.' },
                'Electronics Cleaning': { icon: 'fas fa-brush', copy: 'Careful cleaning of devices and sensitive electronic surfaces.' },
                'Electronic Components': { icon: 'fas fa-microchip', copy: 'Technical handling and support around electronic parts and components.' },
                'Engineering Solutions': { icon: 'fas fa-cogs', copy: 'Technical problem-solving and engineered support solutions.' },
                'Environmental Services': { icon: 'fas fa-leaf', copy: 'Environmental handling, maintenance, and related support work.' },
                'Food Supply Services': { icon: 'fas fa-utensils', copy: 'Food-related sourcing and delivery support for operations.' },
                'Hardware & Fittings': { icon: 'fas fa-tools', copy: 'Hardware, fittings, and practical site support services.' },
                'Industrial Cleaning': { icon: 'fas fa-industry', copy: 'Heavy-duty cleaning support for industrial spaces.' },
                'Other Service': { icon: 'fas fa-plus-circle', copy: 'A custom service request outside the listed categories.' }
            },
            Supplies: {
                'Computer Cleaning Kits': { icon: 'fas fa-laptop', copy: 'Cleaning products and accessories for computers and office equipment.' },
                'Stationery & Office Supplies': { icon: 'fas fa-pencil-ruler', copy: 'Everyday stationery and workplace essentials.' },
                'Electrical Hardware': { icon: 'fas fa-bolt', copy: 'Electrical fittings, accessories, and hardware components.' },
                'Agri & Forestry Machinery': { icon: 'fas fa-tractor', copy: 'Machinery and equipment for agricultural and land work.' },
                'Media Equipment': { icon: 'fas fa-photo-video', copy: 'Cameras, media accessories, and related production gear.' },
                'Power Systems': { icon: 'fas fa-charging-station', copy: 'Power equipment and related supply systems.' },
                'Home Appliances': { icon: 'fas fa-plug', copy: 'Appliances and household equipment for modern living.' },
                'Furniture & Furnishings': { icon: 'fas fa-couch', copy: 'Furniture items and complementary furnishing products.' },
                'Industrial Machinery': { icon: 'fas fa-industry', copy: 'Machinery and equipment for industrial operations.' },
                'Land Services Contracting': { icon: 'fas fa-tools', copy: 'Contracting-related products and site support items.' },
                'Other Supply': { icon: 'fas fa-plus-circle', copy: 'A custom supply request outside the listed categories.' }
            }
        };

        function escapeHtml(value) {
            return String(value)
                .replace(/&/g, '&amp;')
                .replace(/</g, '&lt;')
                .replace(/>/g, '&gt;')
                .replace(/"/g, '&quot;')
                .replace(/'/g, '&#39;');
        }

        function getOptionsFromSelect(selectElement) {
            return Array.prototype.slice.call(selectElement.options)
                .filter(function (option) {
                    return option.value && !option.disabled;
                })
                .map(function (option) {
                    var meta = (quoteOptionMeta[categorySelect.value] && quoteOptionMeta[categorySelect.value][option.value]) || {};
                    return {
                        value: option.value,
                        label: option.textContent.trim(),
                        icon: meta.icon || 'fas fa-circle',
                        copy: meta.copy || 'Select this option for a tailored quote.'
                    };
                });
        }

        function getActiveSelect(category) {
            return category === 'Services' ? serviceSelect : supplySelect;
        }

        function resetSelect(selectElement) {
            selectElement.selectedIndex = 0;
            selectElement.required = false;
        }

        function updateSummary(category, value) {
            if (!value) {
                selectionSummary.classList.add('d-none');
                selectionSummary.textContent = '';
                return;
            }

            var categoryLabel = category === 'Services' ? 'service' : 'supply';
            selectionSummary.classList.remove('d-none');
            selectionSummary.textContent = 'Selected ' + categoryLabel + ': ' + value;
        }

        function renderOptionCards(category) {
            var activeSelect = getActiveSelect(category);
            var options = getOptionsFromSelect(activeSelect);
            var selectedValue = activeSelect.value;

            quoteOptionGrid.innerHTML = options.map(function (option) {
                var activeClass = option.value === selectedValue ? ' is-active' : '';
                return (
                    '<button class="quote-option-card' + activeClass + '" type="button" data-option-value="' + escapeHtml(option.value) + '">' +
                        '<i class="' + escapeHtml(option.icon) + '" aria-hidden="true"></i>' +
                        '<span><strong>' + escapeHtml(option.label) + '</strong><small>' + escapeHtml(option.copy) + '</small></span>' +
                    '</button>'
                );
            }).join('');
        }

        function applyCategory(category) {
            categorySelect.value = category;
            requestTypeInput.value = category;
            quoteCategoryChoices.classList.remove('is-invalid');
            serviceContainer.classList.toggle('d-none', category !== 'Services');
            supplyContainer.classList.toggle('d-none', category !== 'Supplies');
            requestStage.classList.remove('d-none');
            quoteOptionHelper.textContent = category === 'Services'
                ? 'Choose the service you want quoted.'
                : 'Choose the supply category you want quoted.';

            quoteCategoryChoices.querySelectorAll('.quote-choice').forEach(function (button) {
                button.classList.toggle('is-active', button.getAttribute('data-category') === category);
            });

            if (category === 'Services') {
                resetSelect(supplySelect);
                serviceSelect.required = true;
            } else {
                resetSelect(serviceSelect);
                supplySelect.required = true;
            }

            getActiveSelect(category).selectedIndex = 0;
            renderOptionCards(category);
            updateSummary(category, '');
        }

        function applyOption(category, value) {
            var activeSelect = getActiveSelect(category);
            activeSelect.value = value;
            activeSelect.required = true;

            quoteOptionGrid.querySelectorAll('.quote-option-card').forEach(function (button) {
                button.classList.toggle('is-active', button.getAttribute('data-option-value') === value);
            });

            updateSummary(category, value);
        }

        quoteCategoryChoices.querySelectorAll('.quote-choice').forEach(function (button) {
            button.addEventListener('click', function () {
                applyCategory(button.getAttribute('data-category'));
            });
        });

        quoteOptionGrid.addEventListener('click', function (event) {
            var optionButton = event.target.closest('.quote-option-card');
            if (!optionButton || !categorySelect.value) {
                return;
            }

            applyOption(categorySelect.value, optionButton.getAttribute('data-option-value'));
        });

        serviceSelect.addEventListener('change', function () {
            if (categorySelect.value === 'Services') {
                applyOption('Services', serviceSelect.value);
            }
        });

        supplySelect.addEventListener('change', function () {
            if (categorySelect.value === 'Supplies') {
                applyOption('Supplies', supplySelect.value);
            }
        });

        quoteForm.addEventListener('submit', function (event) {
            if (!categorySelect.value) {
                event.preventDefault();
                quoteCategoryChoices.classList.add('is-invalid');
                quoteCategoryChoices.scrollIntoView({ behavior: 'smooth', block: 'center' });
                return;
            }

            if (!getActiveSelect(categorySelect.value).value) {
                event.preventDefault();
                requestStage.classList.remove('d-none');
                quoteOptionHelper.textContent = categorySelect.value === 'Services'
                    ? 'Choose one service before sending your quote request.'
                    : 'Choose one supply option before sending your quote request.';
                getActiveSelect(categorySelect.value).focus();
            }
        });
    }

    
})(jQuery);
