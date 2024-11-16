"use client";

import { useEffect, useState } from "react";

function getTextSize(level: number, minLevel: number) {
  switch (level - minLevel) {
    case 0:
      return "text-md";
    case 1:
      return "text-sm";
    case 2:
      return "text-sm";
    case 3:
      return "text-xs";
    default:
      return "text-xs";
  }
}

function getHeadingColor(id: string, active: string) {
  return id === active
    ? "text-contrast-light dark:text-contrast-dark"
    : "text-tertiary-light dark:text-tertiary-dark";
}

const TableOfContents = (props: any) => {
  const headings = props.headings;

  const [active, setActive] = useState(headings.length ? headings[0].id : "");

  useEffect(() => {
    const handleScroll = () => {
      const visibleHeadings = headings.filter(({ id }: any) => {
        return isElementInViewport(id);
      });

      if (visibleHeadings.length > 0) {
        setActive(visibleHeadings[0].id);
      }
    };

    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll); // cleanup -> remove any event listeners before the component is unmounted, or dependencies change
    };
  }, []);

  const isElementInViewport = (id: string) => {
    const el = document.getElementById(id);

    if (!el) {
      return false;
    }

    const rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  };

  if (!headings.length) {
    return null;
  }

  const minLevel = Math.min(...headings.map(({ level }: any) => level));

  return (
    <div className="fixed right-0 top-0 ml-8 mt-40 hidden w-1/4 p-4 lg:block">
      <h3 className="text-2xl font-bold text-black dark:text-white">
        On this page
      </h3>
      <ul className="mt-2 list-inside list-disc">
        {headings.map(({ id, level, text }: any) => (
          <li
            key={id}
            className={`${getHeadingColor(id, active)}
                ${getTextSize(level, minLevel)}
                ml-${(level - minLevel) * 4}
                hover:text-contrast-light
                dark:hover:text-contrast-dark
                mb-1
                list-none`}
          >
            <a href={`#${id}`} onClick={() => setActive(id)}>
              {text}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TableOfContents;
