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
exports.PagesAPI = void 0;
class PagesAPI {
    constructor(api) {
        this.api = api;
    }
    /**
     * List pages in your site
     * @param pageId
     */
    list() {
        return __awaiter(this, arguments, void 0, function* (page = 1) {
            const response = yield this.api.get("/pages", {
                params: {
                    page,
                },
            });
            return response.data;
        });
    }
    /**
     * Get a single page
     * @param slug
     * @returns
     */
    get(slug) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.api.get(`/pages/slug?slug=${slug}`);
            return response.data;
        });
    }
}
exports.PagesAPI = PagesAPI;
