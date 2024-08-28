import axios, { AxiosInstance } from "axios";

import { CommentsAPI } from "./endpoints/Comments";
import { SitesAPI } from "./endpoints/Sites";
import { PagesAPI } from "./endpoints/Pages";
import { AuthorsAPI } from "./endpoints/Authors";

const url = "https://headlesscomments.io/api";

export class HeadlessComments {

  private api: AxiosInstance;
  private apiKey: string;
  private siteId: string;

  // Endpoint classes
  public sites: SitesAPI;
  public pages: PagesAPI;
  public comments: CommentsAPI;
  public authors: AuthorsAPI;

  constructor(apiKey: string, siteId: string) {
    this.apiKey = apiKey;
    this.siteId = siteId;

    this.api = axios.create({
      baseURL: url,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${this.apiKey}`,
        "X-Site-Id": this.siteId,
      },
    });

    this.sites = new SitesAPI(this.api);
    this.pages = new PagesAPI(this.api);
    this.comments = new CommentsAPI(this.api);
    this.authors = new AuthorsAPI(this.api);
  }
}


