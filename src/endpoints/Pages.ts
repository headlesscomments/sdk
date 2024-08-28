import { AxiosInstance } from "axios";

import { Meta, Page } from "../types";

export class PagesAPI {
  constructor(private api: AxiosInstance) {}

  /**
   * List pages in your site
   * @param pageId
   */
  public async list(page = 1): Promise<{
    meta: Meta;
    data: Page[];
  }> {
    const response = await this.api.get("/pages", {
      params: {
        page,
      },
    });
    return response.data;
  }

  /**
   * Get a single page
   * @param slug
   * @returns
   */
  public async get(slug: string): Promise<Page> {
    const response = await this.api.get(`/pages/slug?=${slug}`);
    return response.data;
  }
}
