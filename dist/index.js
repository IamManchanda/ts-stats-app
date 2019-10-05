"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var MatchReader_1 = __importDefault(require("./MatchReader"));
var CsvFileReader_1 = __importDefault(require("./CsvFileReader"));
var MatchSummary_1 = __importDefault(require("./MatchSummary"));
var csvFileReader = new CsvFileReader_1.default("football.csv");
var matchReader = new MatchReader_1.default(csvFileReader);
matchReader.load();
var manUnitedConsoleSummary = MatchSummary_1.default.winsAnalysisWithConsoleReport("Man United");
manUnitedConsoleSummary.buildAndPrintReport(matchReader.matches);
var manUnitedWebSummary = MatchSummary_1.default.winsAnalysisWithWebReport("Man United", "man-united.html");
manUnitedWebSummary.buildAndPrintReport(matchReader.matches);
