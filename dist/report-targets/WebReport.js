"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = __importDefault(require("fs"));
var WebReport = /** @class */ (function () {
    function WebReport(fileName) {
        this.fileName = fileName;
    }
    WebReport.prototype.print = function (report) {
        var markup = "\n      <div>\n        <h1>Analysis Output</h1>\n        <div>" + report + "</div>\n      </div>\n    ";
        fs_1.default.writeFileSync(this.fileName, markup);
    };
    return WebReport;
}());
exports.default = WebReport;
