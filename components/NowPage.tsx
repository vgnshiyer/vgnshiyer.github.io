import React from "react";
import Markdown from "markdown-to-jsx";
import getNowData from "@/helpers/getNowData";

const getMarkdown = (data: any) => {
  return (
    <Markdown
      options={{
        overrides: {
          a: {
            props: {
              className:
                "border-b border-dotted border-tertiary-light dark:border-tertiary-dark text-tertiary-light dark:text-tertiary-dark hover:text-contrast-light dark:hover:text-contrast-dark",
            },
          },
        },
      }}
      className="ml-6"
    >
      {data}
    </Markdown>
  );
};

const NowPage = () => {
  const nowData = getNowData();

  return (
    <>
      <div className="mt-20 flex flex-col sm:mx-8">
        <div>
          <h1 className="text-3xl font-bold text-black dark:text-white">
            Recent.
          </h1>
          <blockquote className="mb-2 mt-1 italic text-gray-600 dark:text-gray-400">
            "Reflecting on recent accomplishments and endeavors."
          </blockquote>
          {nowData.recent.map((item, index) => (
            <div key={index} className="flex items-center">
              <p className="text-contrast-light dark:text-contrast-dark text-base">
                {item.date}
              </p>
              <p className="text-base text-black dark:text-white">
                {getMarkdown(item.action)}
              </p>
            </div>
          ))}
        </div>
        <div>
          <h1 className="mt-20 text-3xl font-bold text-black dark:text-white">
            Now.
          </h1>
          <blockquote className="mb-2 mt-1 italic text-gray-600 dark:text-gray-400">
            "Current activities and focus."
          </blockquote>
          {nowData.now.map((item, index) => (
            <div key={index} className="flex items-center">
              <p className="text-contrast-light dark:text-contrast-dark text-base">
                {item.date}
              </p>
              <p className="text-base text-black dark:text-white">
                {getMarkdown(item.action)}
              </p>
            </div>
          ))}
        </div>
        <div>
          <h1 className="mt-20 text-3xl font-bold text-black dark:text-white">
            Upcoming.
          </h1>
          <blockquote className="mb-2 mt-1 italic text-gray-600 dark:text-gray-400">
            "Anticipated future plans and goals."
          </blockquote>
          {nowData.upcoming.map((item, index) => (
            <div key={index} className="flex items-center">
              <p className="text-contrast-light dark:text-contrast-dark text-base">
                {item.date}
              </p>
              <p className="text-base text-black dark:text-white">
                {getMarkdown(item.action)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default NowPage;
