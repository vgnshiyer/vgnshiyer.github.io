## This website is the personal blog of Vignesh Iyer <span style="color:#FFBD38">(vgnshiyer)

[![](https://badgen.net/github/license/vgnshiyer/vgnshiyer.github.io)](https://github.com/vgnshiyer/vgnshiyer.github.io/blob/master/LICENSE)
[![](https://img.shields.io/badge/Follow-vgnshiyer-0A66C2?logo=linkedin)](https://www.linkedin.com/comm/mynetwork/discovery-see-all?usecase=PEOPLE_FOLLOWS&followMember=vgnshiyer)
[![Buy Me A Coffee](https://img.shields.io/badge/Buy%20Me%20A%20Coffee-Donate-yellow.svg?logo=buymeacoffee)](https://www.buymeacoffee.com/vgnshiyer)

### Getting started

1. Install [npm](https://formulae.brew.sh/formula/node)
2. Run `npm install` in project root dir.
3. Run `npm run dev` to start developer server on localhost.

### Project Structure

- `/app`: main folder contains app routes (about, posts, tags, etc.)
- `/components`: react/next components
- `/public/blogs`: static blog content (markdown files)
- `/types`: custom datatypes
- `/helpers`: helper methods
- `/.github/workflows/nextjs.yml`: cicd to deploy site to github pages

### Help

- New RSS feed is generate on every build using `npm run build`
  - see [/app/posts/\[slug\]/page.tsx](/app/posts/\[slug\]/page.tsx) `generateStaticParams()` method. (Kind of a hacky way tbh.. Can define a separate npm command)
- `/app/posts/[slug]/page.tsx` -> is the file used for rendering all the static blog posts.
  - `[slug]` is a variable that is replaced with the slug param in the props for page.tsx.
- Similar structure followed for tags.

### License

This project is licensed under the MIT License - see the LICENSE.md file for details
