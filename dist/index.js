"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var FootballMatchReader_1 = __importDefault(require("./FootballMatchReader"));
var CsvFileReader_1 = __importDefault(require("./CsvFileReader"));
var enums_1 = require("./ts-lib/enums");
var csvFileReader = new CsvFileReader_1.default("football.csv");
var footballMatchReader = new FootballMatchReader_1.default(csvFileReader);
footballMatchReader.load();
var manUnitedWins = 0;
for (var _i = 0, _a = footballMatchReader.matches; _i < _a.length; _i++) {
    var match = _a[_i];
    if (match[1] === "Man United" && match[5] === enums_1.MatchResult.HomeWin) {
        manUnitedWins += 1;
    }
    else if (match[2] === "Man United" && match[5] === enums_1.MatchResult.AwayWin) {
        manUnitedWins += 1;
    }
}
console.log("Man United won " + manUnitedWins + " games");
