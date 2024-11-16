import Markdown from "markdown-to-jsx";
import Link from "next/link";

const PostMarkdown = ({
  content,
  options = {},
}: {
  content: string;
  options?: any;
}) => (
  <Markdown
    options={{
      overrides: {
        ...options?.overrides,
        h2: { props: { className: "text-black dark:text-white font-bold" } },
        h3: { props: { className: "text-black dark:text-white font-bold" } },
        h4: { props: { className: "text-black dark:text-white font-bold" } },
        p: {
          props: {
            className: "text-tertiary-light dark:text-tertiary-dark text-base",
          },
        },
        li: {
          props: {
            className: "text-tertiary-light dark:text-tertiary-dark text-base",
          },
        },
        strong: {
          props: {
            className: "font-bold text-black dark:text-white text-base",
          },
        },
        pre: {
          props: { className: "rounded-md !p-2 !bg-semi-dark !text-base" },
        },
        code: { props: { className: "!text-white !font-mono !text-sm" } },
        a: {
          component: ({ href, children, ...props }: { href: string; children: React.ReactNode}) => (
            <Link href={href} {...props} className="text-tertiary-light dark:text-tertiary-dark hover:text-contrast-light dark:hover:text-contrast-dark text-base">
              {children}
            </Link>
          ),
        },
      },
    }}
  >
    {content}
  </Markdown>
);

export default PostMarkdown;
