"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var FootballMatchReader_1 = __importDefault(require("./FootballMatchReader"));
var enums_1 = require("./ts-lib/enums");
var reader = new FootballMatchReader_1.default("football.csv");
reader.read();
var dateOfFirstMatch = reader.data[0][0];
console.log(dateOfFirstMatch);
var manUnitedWins = 0;
for (var _i = 0, _a = reader.data; _i < _a.length; _i++) {
    var match = _a[_i];
    if (match[1] === "Man United" && match[5] === enums_1.MatchResult.HomeWin) {
        manUnitedWins += 1;
    }
    else if (match[2] === "Man United" && match[5] === enums_1.MatchResult.AwayWin) {
        manUnitedWins += 1;
    }
}
console.log("Man United won " + manUnitedWins + " games");
