type MarkdownHeading = {
    id: string;
    level: number | undefined;
    text: string;
};

const getMarkdownHeadings = (markdown: string): MarkdownHeading[] => {
    const regex = /#{1,6}.*(?=\n)/g;
    const headings = markdown.match(regex);

    if (!headings) {
        return [];
    }

    return headings.map((heading) => {
        const level = heading.match(/#/g)?.length;
        const rawHeading = heading.replace(/#/g, "").trim();
        
        const text = rawHeading.replace(/\d+\./g, "");
        const id = rawHeading.replace(/\s/g, "-").toLowerCase().replace(/[^a-z0-9-]/g, "");

        return {
            id,
            level,
            text,
        };
    });
};

export default getMarkdownHeadings;
