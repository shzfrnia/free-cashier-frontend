import {API_POINT} from "./api_point";
import axios from 'axios'

const API_ROUTES = {
  tables: `${API_POINT}/tables`
}


export class TablesApi {
  static async getTables() {
    try {
      const result = await axios.get(API_ROUTES.tables)
      return result.data
    } catch(error) {
      throw error.response.data
    }
  }

  static async reservationTable(param) {
    try {
        axios.post(API_ROUTES.tables, param).then((res) => {
      return res
      })
    }
      catch(error) {
      throw error.response.data
    }
  }
}