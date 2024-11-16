import PageTitle from "../PageTitle";

const Heading = ({ title, subtitle }: { title: String; subtitle: String }) => (
  <div>
    <PageTitle title={title} />
    <blockquote className="text-tertiary-light dark:text-tertiary-dark mb-2 mt-1 italic">
    "{subtitle}"
    </blockquote>
  </div>
);

export default Heading;