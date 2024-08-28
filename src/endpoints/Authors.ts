import { AxiosInstance } from "axios";

import { Meta, Author } from "../types";

export class AuthorsAPI {
  constructor(private api: AxiosInstance) {}

  /**
   * List Authors in your site
   * @param pageId
   */
  public async list(page = 1): Promise<{
    meta: Meta;
    data: Author[];
  }> {
    const response = await this.api.get("/authors", {
      params: {
        page,
      },
    });
    return response.data;
  }

  /**
   * Get a single Author
   * @param id
   * @returns
   */
  public async get(id: string): Promise<Author> {
    const response = await this.api.get(`/authors/${id}`);
    return response.data;
  }
}
