import { AxiosInstance } from "axios";
import { Meta, Reaction } from "../types";
export declare class ReactionsAPI {
    private api;
    constructor(api: AxiosInstance);
    /**
     * List reactions for a page or comment
     * @param type pages or comments
     * @param id The page slug or comment id
     * @returns
     */
    list(type: "pages" | "comments", id?: string, reaction?: string): Promise<{
        meta: Meta;
        data: Reaction[];
    }>;
    /**
     * Create a new reaction for a page or comment
     * @param id The page slug or comment id
     * @returns
     */
    create(type: "pages" | "comments", id: string, reaction: string): Promise<{
        message: string;
    }>;
}
