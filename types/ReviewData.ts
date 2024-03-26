export interface ReviewData {
    [category: string]: {
        reviews: {
            date: string;
            title: string;
            author: string;
            review: string;
        }[];
    }
}