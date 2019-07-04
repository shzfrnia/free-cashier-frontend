import {FakeTables} from "./data";
import {FakeUser} from "./data";

export class TablesApi {
  static async getTables(unixTime) {
      const result = FakeTables[unixTime]
      if(result.length !== 12) {
          throw "BLEAN CHTO TO NE TAK"
      }

      return result
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