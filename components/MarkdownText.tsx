import Markdown from "markdown-to-jsx";

const getMarkdown = ({data}: {data: any}) => {
    return (
      <Markdown
        options={{
          overrides: {
            a: {
              props: {
                className:
                  "underline text-tertiary-light dark:text-tertiary-dark hover:text-contrast-light dark:hover:text-contrast-dark",
              },
            },
          },
        }}
        className=""
      >
        {data}
      </Markdown>
    );
  };

export default getMarkdown;