import {FakeArray} from "./data";

export class TablesApi {
  static async getTables() {
      const result = FakeArray

      if(result.length !== 4) {
          throw "BLEAN CHTO TO NE TAK"
      }

      return result
  }
}