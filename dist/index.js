"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HeadlessComments = void 0;
const axios_1 = __importDefault(require("axios"));
const Comments_1 = require("./endpoints/Comments");
const Sites_1 = require("./endpoints/Sites");
const Pages_1 = require("./endpoints/Pages");
const Authors_1 = require("./endpoints/Authors");
const url = "https://headlesscomments.io/api";
class HeadlessComments {
    constructor(apiKey, siteId) {
        this.apiKey = apiKey;
        this.siteId = siteId;
        this.api = axios_1.default.create({
            baseURL: url,
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${this.apiKey}`,
                "X-Site-Id": this.siteId,
            },
        });
        this.sites = new Sites_1.SitesAPI(this.api);
        this.pages = new Pages_1.PagesAPI(this.api);
        this.comments = new Comments_1.CommentsAPI(this.api);
        this.authors = new Authors_1.AuthorsAPI(this.api);
    }
}
exports.HeadlessComments = HeadlessComments;
