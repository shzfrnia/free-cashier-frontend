import {FakeTables} from "./data";
import {FakeUser} from "./data";
import {FakeReservation} from "./data";
import moment from "moment";

//проверка на то какой день
export class TablesApi {
  static async getTables(unixTime) {
      if (moment.unix(unixTime).format("MM/DD/YYYY") === moment().format("MM/DD/YYYY")) {
        const result = FakeTables['0']
        if(result.length !== 11) {
            throw "BLEAN CHTO TO NE TAK"
        }
        return result

       } else {
        const result = FakeTables['1']
        if(result.length !== 11) {
            throw "BLEAN CHTO TO NE TAK"
        }
        return result
        
       }
  }
}

export class ReservationAPi {
  static async getReservations(unixTime) {
    if (moment.unix(unixTime).format("MM/DD/YYYY") === moment().format("MM/DD/YYYY")) {
      return FakeReservation['0']

    } else {
      return FakeReservation['1']

    }
  }

  static async deleteReservation(id) {
    window.console.log(FakeReservation['0'])
    FakeReservation['0'] = FakeReservation['0'].filter(i => i.id !== id)
    window.console.log(FakeReservation['0'])
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