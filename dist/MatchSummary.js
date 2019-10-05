"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var ConsoleReport_1 = __importDefault(require("./report-targets/ConsoleReport"));
var WebReport_1 = __importDefault(require("./report-targets/WebReport"));
var WinsAnalysis_1 = __importDefault(require("./analyzers/WinsAnalysis"));
var MatchSummary = /** @class */ (function () {
    function MatchSummary(analyzer, outputTarget) {
        this.analyzer = analyzer;
        this.outputTarget = outputTarget;
    }
    MatchSummary.winsAnalysisWithConsoleReport = function (teamName) {
        return new MatchSummary(new WinsAnalysis_1.default(teamName), new ConsoleReport_1.default());
    };
    MatchSummary.winsAnalysisWithWebReport = function (teamName, fileName) {
        return new MatchSummary(new WinsAnalysis_1.default(teamName), new WebReport_1.default(fileName));
    };
    MatchSummary.prototype.buildAndPrintReport = function (matches) {
        var report = this.analyzer.run(matches);
        this.outputTarget.print(report);
    };
    return MatchSummary;
}());
exports.default = MatchSummary;
