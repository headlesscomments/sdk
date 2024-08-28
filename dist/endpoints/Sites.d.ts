import { AxiosInstance } from "axios";
import { Site } from "../types";
export declare class SitesAPI {
    private api;
    constructor(api: AxiosInstance);
    /**
     * List sites in your team
     * @param pageId
     */
    list(): Promise<{
        data: Site[];
    }>;
    /**
     * Get a single site
     * @param id
     * @returns
     */
    get(id: string): Promise<Site>;
}
