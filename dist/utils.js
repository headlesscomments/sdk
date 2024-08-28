"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildParams = buildParams;
function buildParams(params) {
    // Filter out parameters that are null or undefined
    return Object.fromEntries(Object.entries(params).filter(([_, v]) => v != null));
}
