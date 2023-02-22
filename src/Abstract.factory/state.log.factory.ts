import  {Time} from "../Types/Time.stamp"

export default class StateLogFactory {
  private time: Time  
  private stateText: string
  private userName: string

  private formatTime(time: Time) {
    return `${time.day} ${time.hour}:${time.minutes}:${time.seconds}`
  }

  setTime (time: Time) {
    this.time = time
  }
 
  setState(stateText: string) {
    this.stateText = stateText
  }

  setUser(userName: string) {
    this.userName = userName
  }

  get user () {
    return this.userName
  }

  get state () {
    return this.stateText
  }

  get timeStamp() {
    return this.formatTime(this.time)
  }
}