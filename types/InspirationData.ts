export interface InspirationData {
    [category: string]: {
        inspirations: {
            date?: string;
            title?: string;
            author?: string;
            review?: string;
            text?: string;
        }[];
    };
}