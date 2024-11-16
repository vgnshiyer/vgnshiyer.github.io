import { NowItem } from "@/types/NowItem";
import getMarkdown from "../MarkdownText";

const Actions = ({ data }: { data: any }) => (
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

export default Actions;