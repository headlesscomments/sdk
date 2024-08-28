import { AxiosInstance } from "axios";

import { Comment, CreateCommentRequest, Meta } from "../types";
import { buildParams } from "../utils";

export class CommentsAPI {
  constructor(private api: AxiosInstance) {}

  /**
   * List comments for a page, filtered by optional parameters
   * @param pageId
   * @param page (optional)
   * @param email (optional)
   * @param approved (optional)
   * @returns List of comments
   */
  public async list(
    pageId: string,
    page?: string,
    email?: string,
    approved?: "true" | "false" | "all"
  ): Promise<{
    meta: Meta;
    data: Comment[];
  }> {
    const params = buildParams({ page, email, approved });

    const response = await this.api.get("/comments", {
      params: {
        page_id: pageId,
        ...params,
      },
    });

    return response.data;
  }

  /**
   * Get a single comment
   * @param id
   * @returns
   */
  public async get(id: string): Promise<Comment> {
    const response = await this.api.get(`/comments/${id}`);
    return response.data;
  }

  /**
   * Create a new comment
   * @param pageId
   * @param data
   * @returns
   */
  public async create(pageId: string, data: CreateCommentRequest): Promise<{ message: string }> {
    const response = await this.api.post(`/comments`, data, {
      headers: {
        "X-Slug": pageId,
      },
    });

    return response.data;
  }

  /**
   * Update a comment approved status
   * @param id
   * @param approved
   * @returns
   */
  public async update(id: string, approved: boolean): Promise<Comment> {
    const response = await this.api.patch(`/comments/${id}`, { approved });
    return response.data;
  }

  /**
   * Delete a comment
   * @param id
   * @returns
   */
  public async delete(id: string): Promise<{ id: string; message: string }> {
    const response = await this.api.delete(`/comments/${id}`);
    return response.data;
  }
}
