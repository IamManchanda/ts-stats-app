import fs from "fs";
import { OutputTarget } from "../ts-utils/interfaces";

class WebReport implements OutputTarget {
  print(report: string): void {
    const markup = `
      <div>
        <h1>Analysis Output</h1>
        <div>${report}</div>
      </div>
    `;

    fs.writeFileSync("report.html", markup);
  }
}

export default WebReport;
