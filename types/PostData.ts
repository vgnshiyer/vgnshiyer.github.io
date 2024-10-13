export interface PostData {
    slug: string | undefined;
    content: string | undefined;
    data: {
        title: string | null;
        subtitle: string | null;
        date: string | null;
        cover: string | null;
        tags: string[] | null;
    }
}