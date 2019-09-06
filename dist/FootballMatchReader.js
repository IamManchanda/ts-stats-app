"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = require("./utils");
var FootballMatchReader = /** @class */ (function () {
    function FootballMatchReader(reader) {
        this.reader = reader;
        this.matches = [];
    }
    FootballMatchReader.prototype.load = function () {
        this.reader.read();
        this.matches = this.reader.data.map(this.iterateThroughRowItems);
    };
    FootballMatchReader.prototype.iterateThroughRowItems = function (row) {
        return [
            utils_1.dateStringToDate(row[0]),
            row[1],
            row[2],
            parseInt(row[3]),
            parseInt(row[4]),
            row[5],
            row[6],
        ];
    };
    return FootballMatchReader;
}());
exports.default = FootballMatchReader;
