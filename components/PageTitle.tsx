const PageTitle = ({ title }: { title: string | String }) => {
  return (
    <h1 className="text-3xl font-bold text-black dark:text-white">{title}</h1>
  );
};

export default PageTitle;