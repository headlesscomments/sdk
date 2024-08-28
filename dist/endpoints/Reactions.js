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
exports.ReactionsAPI = void 0;
class ReactionsAPI {
    constructor(api) {
        this.api = api;
    }
    /**
     * List reactions for a page or comment
     * @param type pages or comments
     * @param id The page slug or comment id
     * @returns
     */
    list(type, id, reaction) {
        return __awaiter(this, void 0, void 0, function* () {
            let url = type === "pages" ? `/reactions/pages?slug=${id}` : `/reactions/comments/${id}`;
            const response = yield this.api.get(url + (reaction ? `&reaction=${reaction}` : ""));
            return response.data;
        });
    }
    /**
     * Create a new reaction for a page or comment
     * @param id The page slug or comment id
     * @returns
     */
    create(type, id, reaction) {
        return __awaiter(this, void 0, void 0, function* () {
            let headers = {};
            if (type === "pages") {
                headers = { "X-Slug": id };
            }
            else {
                headers = { "X-Comment-Id": id };
            }
            const response = yield this.api.post(`/reactions`, { reaction }, { headers });
            return response.data;
        });
    }
}
exports.ReactionsAPI = ReactionsAPI;
