import Markdown from "markdown-to-jsx";
import { NowItem } from "@/types/NowItem";
import getMarkdown from "./MarkdownText";

interface NowSectionProps {
  data: Array<NowItem>;
  title: String;
  subtitle: String;
}

const renderHeading = (title: String, subtitle: String) => (
  <div>
    <h1 className="text-3xl font-bold text-black dark:text-white">{title}</h1>
    <blockquote className="text-tertiary-light dark:text-tertiary-dark mb-2 mt-1 italic">
      "{subtitle}"
    </blockquote>
  </div>
);

const renderDates = (data: Array<NowItem>) => (
  <div className="mt-1 flex max-w-full flex-col items-center md:mt-2">
    {data
      .sort(
        (a: NowItem, b: NowItem) =>
          new Date(a.date).getTime() - new Date(b.date).getTime(),
      )
      .map((item: NowItem, index: any) => (
        <div key={index} className="mb-2 flex items-center">
          <p className="text-contrast-light dark:text-contrast-dark text-nowrap text-sm md:text-base">
            {item.date}
          </p>
        </div>
      ))}
  </div>
);

const renderActions = (data: any) => (
  <div className="bg-semi-light dark:bg-semi-dark ml-2 grid w-[80%] grid-cols-1 overflow-x-auto rounded-xl p-1 shadow-md md:ml-8 md:p-2">
    {data
      .sort(
        (a: NowItem, b: NowItem) =>
          new Date(a.date).getTime() - new Date(b.date).getTime(),
      )
      .map((item: NowItem, index: any) => (
        <div key={index} className="flex items-center">
          <div className="text-nowrap text-sm text-black md:text-base dark:text-white ml-4 md:ml-6">
            {getMarkdown({data: item.action})}
          </div>
        </div>
      ))}
  </div>
);

const NowSection = ({ data, title, subtitle }: NowSectionProps) => (
  <div className="mb-12 md:ml-10">
    {renderHeading(title, subtitle)}
    <div className="mt-2 flex">
      {renderDates(data)}
      {renderActions(data)}
    </div>
  </div>
);

export default NowSection;
