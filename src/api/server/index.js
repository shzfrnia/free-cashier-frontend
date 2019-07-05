import {API_POINT} from "./api_point";
import axios from 'axios'
import FakeUser from "../mock/data";

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



export class AuthAPI {
  static async logIn({login, password}) {
    if(AuthAPI.creedAreValid({login,password})) {
      const {login, password} = FakeUser
      const result = {
        displayName:login,
        token: btoa(password + new Date())
      }
      return result
    } else {
      throw "Пароль логин неверен"
    }
  }

  static creedAreValid({login, password}) {
    return FakeUser.login === login && FakeUser.password === password
  }

  static logOut() {
    window.console.log("LOGOUT QA")
  }
}