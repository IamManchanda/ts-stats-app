"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MatchSummary = /** @class */ (function () {
    function MatchSummary(analyzer, outputTarget) {
        this.analyzer = analyzer;
        this.outputTarget = outputTarget;
    }
    MatchSummary.prototype.buildAndPrintReport = function (matches) {
        var report = this.analyzer.run(matches);
        this.outputTarget.print(report);
    };
    return MatchSummary;
}());
exports.default = MatchSummary;
