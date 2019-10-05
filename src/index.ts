import MatchReader from "./MatchReader";
import CsvFileReader from "./CsvFileReader";
import ConsoleReport from "./report-targets/ConsoleReport";
import WinsAnalysis from "./analyzers/WinsAnalysis";
import MatchSummary from "./MatchSummary";

const csvFileReader = new CsvFileReader("football.csv");
const matchReader = new MatchReader(csvFileReader);

matchReader.load();

const manUnitedSummary = new MatchSummary(
  new WinsAnalysis("Man United"),
  new ConsoleReport(),
);

manUnitedSummary.buildAndPrintReport(matchReader.matches);
