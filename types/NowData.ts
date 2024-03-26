import { NowItem } from "./NowItem";

export interface nowData {
    recent: {
        data: NowItem[];
        quote: string;
    };
    now: {
        data: NowItem[];
        quote: string;
    };
    upcoming: {
        data: NowItem[];
        quote: string;
    };
}