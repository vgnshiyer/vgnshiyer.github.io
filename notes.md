## Notes

- Named exports are multiple per module and must be imported with their original name, while a default export is one per module and can be imported with any name.
- page.tsx is the index file for a page.
    - to create a page, add a file to the app folder with a page.tsx -> a route will be created automatically with the name of the folder.
- layout.tsx wraps all child components (have a header and footer in all pages)
- main feature of tsx/jsx is ability to create ReactElement with html syntax
```
eg.

const footer = (
	<p>This is footer<p> // JSX expression
);
```
This gets transpiled into React.CreateElement call which creates a createElement object.

- [slug] is a variable that makes a page available for any dynamic page to land here.
- yaml metadata in markdown is known as frontmatter.

**Architecture so far**

- One layout.tsx which is like the root element run by default by nextjs
- One header and a footer in the layout.tsx which renders on every single page.
- all markdown files for blog posts to be stored in /posts dir.
- All posts are rendered as static content with the getFilePaths method. -> run during npm build
- /app/posts/[slug]/page.tsx -> is the file used for rendering all the static blog posts.
- [slug] is a variable that is replaced with the slug param in the props for page.tsx.