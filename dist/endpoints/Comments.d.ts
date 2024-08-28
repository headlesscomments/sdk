import { AxiosInstance } from "axios";
import { Comment, CreateCommentRequest, Meta } from "../types";
export declare class CommentsAPI {
    private api;
    constructor(api: AxiosInstance);
    /**
     * List comments for a page, filtered by optional parameters
     * @param pageId
     * @param page (optional)
     * @param email (optional)
     * @param approved (optional)
     * @returns List of comments
     */
    list(pageId: string, page?: string, email?: string, approved?: "true" | "false" | "all"): Promise<{
        meta: Meta;
        data: Comment[];
    }>;
    /**
     * Get a single comment
     * @param id
     * @returns
     */
    get(id: string): Promise<Comment>;
    /**
     * Create a new comment
     * @param pageId
     * @param data
     * @returns
     */
    create(pageId: string, data: CreateCommentRequest): Promise<{
        message: string;
    }>;
    /**
     * Update a comment approved status
     * @param id
     * @param approved
     * @returns
     */
    update(id: string, approved: boolean): Promise<Comment>;
    /**
     * Delete a comment
     * @param id
     * @returns
     */
    delete(id: string): Promise<{
        id: string;
        message: string;
    }>;
}
