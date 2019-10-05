import MatchReader from "./MatchReader";
import CsvFileReader from "./CsvFileReader";
import MatchSummary from "./MatchSummary";

const csvFileReader = new CsvFileReader("football.csv");
const matchReader = new MatchReader(csvFileReader);
matchReader.load();

const manUnitedConsoleSummary = MatchSummary.winsAnalysisWithConsoleReport(
  "Man United",
);
manUnitedConsoleSummary.buildAndPrintReport(matchReader.matches);

const manUnitedWebSummary = MatchSummary.winsAnalysisWithWebReport(
  "Man United",
  "man-united.html",
);
manUnitedWebSummary.buildAndPrintReport(matchReader.matches);
