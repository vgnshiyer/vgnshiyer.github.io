import { NowItem } from "./NowItem";

export interface NowData {
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