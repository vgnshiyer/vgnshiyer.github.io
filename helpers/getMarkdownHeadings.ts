import { MarkdownHeading } from "../types/MarkDownHeading";

const getMarkdownHeadings = (markdown: string): MarkdownHeading[] => {
    const lines = markdown.split("\n");
    const headings: MarkdownHeading[] = [];
    let inCodeBlock = false;
    const regex = /^(#{1,6}) (.*)$/g;

    for (const line  of lines) {
        if (line.trim().startsWith("```")) {
            inCodeBlock = !inCodeBlock;
            continue;
        }

        if (inCodeBlock) continue;

        const match = line.match(regex);
        if (match) {
            const level = match[0].match(/#/g)?.length;
            const rawHeading = match[0].replace(/#/g, "").trim();

            const text = rawHeading.replace(/\d+\./g, "");
            const id = rawHeading.replace(/\s/g, "-").toLowerCase().replace(/[^a-z0-9-]/g, "");

            headings.push({
                id,
                level,
                text,
            });
        }
    }

    return headings;
};

export default getMarkdownHeadings;
