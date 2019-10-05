"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var MatchReader_1 = __importDefault(require("./MatchReader"));
var CsvFileReader_1 = __importDefault(require("./CsvFileReader"));
var ConsoleReport_1 = __importDefault(require("./report-targets/ConsoleReport"));
var WebReport_1 = __importDefault(require("./report-targets/WebReport"));
var WinsAnalysis_1 = __importDefault(require("./analyzers/WinsAnalysis"));
var MatchSummary_1 = __importDefault(require("./MatchSummary"));
var csvFileReader = new CsvFileReader_1.default("football.csv");
var matchReader = new MatchReader_1.default(csvFileReader);
matchReader.load();
var manUnitedConsoleSummary = new MatchSummary_1.default(new WinsAnalysis_1.default("Man United"), new ConsoleReport_1.default());
manUnitedConsoleSummary.buildAndPrintReport(matchReader.matches);
var manUnitedWebSummary = new MatchSummary_1.default(new WinsAnalysis_1.default("Man United"), new WebReport_1.default());
manUnitedWebSummary.buildAndPrintReport(matchReader.matches);
