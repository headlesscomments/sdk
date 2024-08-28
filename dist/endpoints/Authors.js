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
exports.AuthorsAPI = void 0;
class AuthorsAPI {
    constructor(api) {
        this.api = api;
    }
    /**
     * List Authors in your site
     * @param pageId
     */
    list() {
        return __awaiter(this, arguments, void 0, function* (page = 1) {
            const response = yield this.api.get("/authors", {
                params: {
                    page,
                },
            });
            return response.data;
        });
    }
    /**
     * Get a single Author
     * @param id
     * @returns
     */
    get(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.api.get(`/authors/${id}`);
            return response.data;
        });
    }
}
exports.AuthorsAPI = AuthorsAPI;
