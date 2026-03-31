import { useEffect } from "react";

export default function usePageSetup(title, pageClass) {
  useEffect(() => {
    document.title = title;

    const pageClasses = Array.from(document.body.classList).filter((className) =>
      className.startsWith("page-")
    );

    pageClasses.forEach((className) => document.body.classList.remove(className));

    if (pageClass) {
      document.body.classList.add(pageClass);
    }

    return () => {
      if (pageClass) {
        document.body.classList.remove(pageClass);
      }
    };
  }, [pageClass, title]);
}
