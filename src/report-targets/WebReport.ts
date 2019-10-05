import fs from "fs";
import { OutputTarget } from "../ts-utils/interfaces";

class WebReport implements OutputTarget {
  constructor(public fileName: string) {}

  print(report: string): void {
    const markup = `
      <div>
        <h1>Analysis Output</h1>
        <div>${report}</div>
      </div>
    `;

    fs.writeFileSync(this.fileName, markup);
  }
}

export default WebReport;
