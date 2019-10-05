import { OutputTarget } from "../ts-utils/interfaces";

class ConsoleReport implements OutputTarget {
  print(report: string): void {
    console.log(report);
  }
}

export default ConsoleReport;
