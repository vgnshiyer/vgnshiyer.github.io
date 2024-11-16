import { NowItem } from "@/types/NowItem";

const DateSection = ({ data }: { data: any }) => (
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

export default DateSection;