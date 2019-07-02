import {API_POINT} from "./api_point";
import axios from 'axios'

const API_ROUTES = {
  tables: `${API_POINT}/tables`
}



export class TablesApi {
  static async getTables() {
    try {
      const result = await axios.post(API_ROUTES.tables)
      return result.data
    } catch(error) {
      throw error.response.data
    }
  }
}