"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var cross_fetch_1 = require("cross-fetch");
var querystring = require("query-string");
/**
 * Translate a string into another language using the DeepL API.
 * @property {TranslationParameters} params The parameters you can send to configure DeepL.
 * @returns {Promise<TranslationResponse>} An array of translated text.
 */
function translate(params) {
    return __awaiter(this, void 0, void 0, function () {
        var response, _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, cross_fetch_1.default("https://api.deepl.com/v2/translate?" + querystring.stringify(params), {
                        method: 'POST',
                    })];
                case 1:
                    response = _b.sent();
                    if (!!response.ok) return [3 /*break*/, 3];
                    _a = "Something went wrong. Are you using a valid authorization key? (";
                    return [4 /*yield*/, response.json()];
                case 2: throw _a + (_b.sent()) + ")";
                case 3: return [2 /*return*/, response.json()];
            }
        });
    });
}
exports.translate = translate;
/**
 * Translate multiple strings into another language using the DeepL API.
 * @property {TranslationMultipleParameters} params The parameters you can send to configure DeepL.
 * @property {string[]} text The text you want to translate.
 * @returns {Promise<TranslationResponse>} An array of translated text.
 */
function translateMultiple(params, text) {
    return __awaiter(this, void 0, void 0, function () {
        var query, mappedText, queryWithText, response, _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    if (text.length < 1)
                        throw 'Text array was empty. No text to translate.';
                    if (text.length > 50)
                        throw 'Text array contained more than 50 strings. This is a restriction of the DeepL API.';
                    query = querystring.stringify(params);
                    mappedText = text.map(function (t) { return "&text=" + t; });
                    queryWithText = query.concat.apply(query, mappedText);
                    return [4 /*yield*/, cross_fetch_1.default("https://api.deepl.com/v2/translate?" + queryWithText, {
                            method: 'POST',
                        })];
                case 1:
                    response = _b.sent();
                    if (!!response.ok) return [3 /*break*/, 3];
                    _a = "Something went wrong. Are you using a valid authorization key? (";
                    return [4 /*yield*/, response.json()];
                case 2: throw _a + (_b.sent()) + ")";
                case 3: return [2 /*return*/, response.json()];
            }
        });
    });
}
exports.translateMultiple = translateMultiple;
/**
 * Get your usage statistics from DeepL.
 * @property {UsageParameters} params Contains the auth key linked to your account.
 * @returns {Promise<UsageResponse>} Your usage statistics.
 */
function usage(params) {
    return __awaiter(this, void 0, void 0, function () {
        var response, _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, cross_fetch_1.default("https://api.deepl.com/v2/usage?" + querystring.stringify(params), {
                        method: 'POST',
                    })];
                case 1:
                    response = _b.sent();
                    if (!!response.ok) return [3 /*break*/, 3];
                    _a = "Something went wrong. Are you using a valid authorization key? (";
                    return [4 /*yield*/, response.json()];
                case 2: throw _a + (_b.sent()) + ")";
                case 3: return [2 /*return*/, response.json()];
            }
        });
    });
}
exports.usage = usage;
