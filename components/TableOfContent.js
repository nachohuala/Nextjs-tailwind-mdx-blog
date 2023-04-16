import { useEffect,useState,useRef } from "react";
import { useHeadings,useScrollSpy } from "../utils/hooks"


export default function TableOfContent({headings}) {
    const activeId = useScrollSpy(
        headings.map(({ id }) => id),
        { rootMargin: "0% 0% -25% 0%" }
    );
        return (
           <nav style={{ position: 'fixed', top: '8em', right: '1em' }}>
            <ul className="text-white">
                <h1>Table of Content</h1>
              {headings.map(heading => (
                <li key={heading.id} style={{ marginLeft: `${heading.level}em` }}>
                  <a 
                    href={`#${heading.id}`} 
                    style={{ 
                        fontWeight: activeId === heading.id ? "bold" : "normal" 
                      }}
                  >
                    {heading.text}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        )
}

