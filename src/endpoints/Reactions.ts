import { AxiosInstance } from "axios";

import { Meta, Author, Reaction } from "../types";

export class ReactionsAPI {
  constructor(private api: AxiosInstance) {}

  /**
   * List reactions for a page or comment
   * @param type pages or comments
   * @param id The page slug or comment id
   * @returns
   */
  public async list(
    type: "pages" | "comments",
    id?: string,
    reaction?: string
  ): Promise<{
    meta: Meta;
    data: Reaction[];
  }> {
    let url = type === "pages" ? `/reactions/pages?slug=${id}` : `/reactions/comments/${id}`;

    const response = await this.api.get(url + (reaction ? `&reaction=${reaction}` : ""));
    return response.data;
  }

  /**
   * Create a new reaction for a page or comment
   * @param id The page slug or comment id
   * @returns
   */
  public async create(type: "pages" | "comments", id: string, reaction: string): Promise<{ message: string }> {
    let headers = {};

    if (type === "pages") {
      headers = { "X-Slug": id };
    } else {
      headers = { "X-Comment-Id": id };
    }

    const response = await this.api.post(`/reactions`, { reaction }, { headers });
    return response.data;
  }
}
