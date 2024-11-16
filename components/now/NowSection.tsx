import { NowItem } from "@/types/NowItem";
import Heading from "./Heading";
import DateSection from "./DateSection";
import Actions from "./Actions";

interface NowSectionProps {
  data: Array<NowItem>;
  title: String;
  subtitle: String;
}

const NowSection = ({ data, title, subtitle }: NowSectionProps) => (
  <div className="mb-12 md:ml-10">
    <Heading title={title} subtitle={subtitle} />
    <div className="mt-2 flex">
      <DateSection data={data} />
      <Actions data={data} />
    </div>
  </div>
);

export default NowSection;
