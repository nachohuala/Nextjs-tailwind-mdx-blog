import { useEffect,useState,useRef } from "react";

export function useScrollSpy(
  ids,
  options
) {
  const [activeId, setActiveId] = useState();
  const observer = useRef();
  useEffect(() => {
    const elements = ids.map((id) =>
      document.getElementById(id)
    );
    observer.current?.disconnect();
    observer.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry?.isIntersecting) {
          setActiveId(entry.target.id);
        }
      });
    }, options);
    elements.forEach((el) => {
      if (el) {
        observer.current?.observe(el);
      }
    });
    return () => observer.current?.disconnect();
  }, [ids, options]);
  return activeId;
}

export function useHeadings() {
  const [headings, setHeadings] = useState([]);
  useEffect(() => {
      setTimeout(() => {
          const elements = Array.from(document.querySelectorAll("h2, h3, h4, h5, h6"))
              .filter((element) => element.id)
              .map((element) => ({
                  id: element.id,
                  text: element.textContent ?? "",
                  level: Number(element.tagName.substring(1))
              }));
          setHeadings(elements);
      }, 100);
  }, [])
  return headings
}
  