"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentsAPI = void 0;
const utils_1 = require("../utils");
class CommentsAPI {
    constructor(api) {
        this.api = api;
    }
    /**
     * List comments for a page, filtered by optional parameters
     * @param pageId
     * @param page (optional)
     * @param email (optional)
     * @param approved (optional)
     * @returns List of comments
     */
    list(pageId, page, email, approved) {
        return __awaiter(this, void 0, void 0, function* () {
            const params = (0, utils_1.buildParams)({ page, email, approved });
            const response = yield this.api.get("/comments", {
                params: Object.assign({ page_id: pageId }, params),
            });
            return response.data;
        });
    }
    /**
     * Get a single comment
     * @param id
     * @returns
     */
    get(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.api.get(`/comments/${id}`);
            return response.data;
        });
    }
    /**
     * Create a new comment
     * @param pageId
     * @param data
     * @returns
     */
    create(pageId, data) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.api.post(`/comments`, data, {
                headers: {
                    "X-Slug": pageId,
                },
            });
            return response.data;
        });
    }
    /**
     * Update a comment approved status
     * @param id
     * @param approved
     * @returns
     */
    update(id, approved) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.api.patch(`/comments/${id}`, { approved });
            return response.data;
        });
    }
    /**
     * Delete a comment
     * @param id
     * @returns
     */
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.api.delete(`/comments/${id}`);
            return response.data;
        });
    }
}
exports.CommentsAPI = CommentsAPI;
