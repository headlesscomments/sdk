import { AxiosInstance } from "axios";

import { Site } from "../types";

export class SitesAPI {
  constructor(private api: AxiosInstance) {}

  /**
   * List sites in your team
   * @param pageId
   */
  public async list(): Promise<{
    data: Site[];
  }> {
    const response = await this.api.get("/sites");

    return response.data;
  }

  /**
   * Get a single site
   * @param id
   * @returns
   */
  public async get(id: string): Promise<Site> {
    const response = await this.api.get(`/sites/${id}`);
    return response.data;
  }
}
