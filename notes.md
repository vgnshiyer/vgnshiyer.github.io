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