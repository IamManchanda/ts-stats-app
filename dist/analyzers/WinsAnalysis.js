"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var enums_1 = require("../ts-utils/enums");
var WinsAnalysis = /** @class */ (function () {
    function WinsAnalysis(teamName) {
        this.teamName = teamName;
    }
    WinsAnalysis.prototype.run = function (matches) {
        var wins = 0;
        for (var _i = 0, matches_1 = matches; _i < matches_1.length; _i++) {
            var match = matches_1[_i];
            var homeWin = enums_1.MatchResult.HomeWin;
            var awayWin = enums_1.MatchResult.AwayWin;
            if (match[1] === this.teamName && match[5] === homeWin) {
                wins += 1;
            }
            else if (match[2] === this.teamName && match[5] === awayWin) {
                wins += 1;
            }
        }
        return this.teamName + " won " + wins + " games";
    };
    return WinsAnalysis;
}());
exports.default = WinsAnalysis;
