import {API_POINT} from "./api_point";

const API_ROUTES = {
  tables: `${API_POINT}/tables`
}



export class TablesApi {
  static async getTables() {
    const req = `${API_ROUTES.tables}` // Представь что это запрос
    if ("There is not exeptions" == true){
      return req
    }
  }

}