import { AxiosInstance } from "axios";
import { Meta, Author } from "../types";
export declare class AuthorsAPI {
  private api;
  constructor(api: AxiosInstance);
  /**
   * List Authors in your site
   * @param pageId
   */
  list(page?: number): Promise<{
    meta: Meta;
    data: Author[];
  }>;
  /**
   * Get a single Author
   * @param id
   * @returns
   */
  get(id: string): Promise<Author>;
}
