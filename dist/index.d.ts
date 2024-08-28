import { CommentsAPI } from "./endpoints/Comments";
import { SitesAPI } from "./endpoints/Sites";
import { PagesAPI } from "./endpoints/Pages";
import { AuthorsAPI } from "./endpoints/Authors";
export declare class HeadlessComments {
    private api;
    private apiKey;
    private siteId;
    sites: SitesAPI;
    pages: PagesAPI;
    comments: CommentsAPI;
    authors: AuthorsAPI;
    constructor(apiKey: string, siteId: string);
}
