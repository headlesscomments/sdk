import { AxiosInstance } from "axios";
import { Meta, Page } from "../types";
export declare class PagesAPI {
    private api;
    constructor(api: AxiosInstance);
    /**
     * List pages in your site
     * @param pageId
     */
    list(page?: number): Promise<{
        meta: Meta;
        data: Page[];
    }>;
    /**
     * Get a single page
     * @param slug
     * @returns
     */
    get(slug: string): Promise<Page>;
}
