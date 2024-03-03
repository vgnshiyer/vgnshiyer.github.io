import Markdown from "markdown-to-jsx";

const getMarkdown = (data: any) => {
  return (
    <Markdown
      options={{
        overrides: {
          a: {
            props: {
              className:
                "border-b border-dotted border-tertiary-light dark:border-tertiary-dark text-black dark:text-white hover:text-contrast-light dark:hover:text-contrast-dark",
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

const renderHeading = (title: String, subtitle: String) => (
  <div>
    <h1 className="text-3xl font-bold text-black dark:text-white">{title}</h1>
    <blockquote className="text-tertiary-light dark:text-tertiary-dark mb-2 mt-1 italic">
      "{subtitle}"
    </blockquote>
  </div>
);

const renderDates = (data: any) => (
  <div className="mt-4 flex w-[12%] flex-col items-center">
    {data
      .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
      .map((item, index) => (
        <div key={index} className="mb-2 flex items-center">
          <p className="text-contrast-light dark:text-contrast-dark text-base">
            {item.date}
          </p>
        </div>
      ))}
  </div>
);

const renderActions = (data: any) => (
  <div className="bg-semi-light dark:bg-semi-dark ml-8 grid w-[80%] grid-cols-1 rounded-3xl p-4 pr-12 shadow-md sm:mx-8 md:flex-col">
    {data
      .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
      .map((item, index) => (
        <div key={index} className="mb-2 flex items-center">
          <div className="text-base text-black dark:text-white">
            {getMarkdown(item.action)}
          </div>
        </div>
      ))}
  </div>
);

const NowSection = ({ data, title, subtitle }) => (
  <div className="ml-10 mt-12">
    {renderHeading(title, subtitle)}
    <div className="mt-2 flex">
      {renderDates(data)}
      {renderActions(data)}
    </div>
  </div>
);

export default NowSection;
