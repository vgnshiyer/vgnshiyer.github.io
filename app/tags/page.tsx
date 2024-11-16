import PageTitle from "@/components/PageTitle";
import TagsList from "@/components/tags/TagsList";

const Tags = () => (
  <div className="mt-12 grid grid-cols-1 gap-4 sm:mx-8 md:mt-16 lg:mt-20 2xl:mt-24">
    <PageTitle title="Tags." />
    <TagsList />
  </div>
)

export default Tags;
