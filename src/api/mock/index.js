import {FakeTables} from "./data";

export class TablesApi {
  static async getTables(unixTime) {
      const result = FakeTables[unixTime]
      if(result.length !== 2) {
          throw "BLEAN CHTO TO NE TAK"
      }

      return result
  }
}