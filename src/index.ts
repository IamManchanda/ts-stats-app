import MatchReader from "./MatchReader";
import CsvFileReader from "./CsvFileReader";
import ConsoleReport from "./report-targets/ConsoleReport";
import WebReport from "./report-targets/WebReport";
import WinsAnalysis from "./analyzers/WinsAnalysis";
import MatchSummary from "./MatchSummary";

const csvFileReader = new CsvFileReader("football.csv");
const matchReader = new MatchReader(csvFileReader);
matchReader.load();

const manUnitedConsoleSummary = new MatchSummary(
  new WinsAnalysis("Man United"),
  new ConsoleReport(),
);
manUnitedConsoleSummary.buildAndPrintReport(matchReader.matches);

const manUnitedWebSummary = new MatchSummary(
  new WinsAnalysis("Man United"),
  new WebReport(),
);
manUnitedWebSummary.buildAndPrintReport(matchReader.matches);
