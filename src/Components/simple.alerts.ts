import  {Time} from "../Types/Time.stamp"
import AbstractFactory from "../Abstract.factory/abstract.factory"

interface ObserverParam {
  state: any,
  user: string
}

const setTime: (arg: Date) => Time = (date) => {
  return {
    hour: date.getHours(),
    minutes: date.getMinutes(),
    seconds: date.getSeconds(),
    year: date.getFullYear(),
    day: date.toLocaleString('default', { weekday: 'short' }),
    month: date.toLocaleString('default', { month: 'short' })
  }
}

const timeString = (time: Time) => {
  return `${time.day} ${time.month} ${time.year} ${ time.hour + `:` + time.minutes + `:` + time.seconds}`
}

const getTimeStamp = () => {
  const consoleTime = setTime(new Date())
  return timeString(consoleTime)
}

export const consoleStateChange = (state: ObserverParam, user: ObserverParam) => {
  console.log(`${getTimeStamp()}: ${user} changed state into -> ${state}`)
}

export const alertStateChange = (state: ObserverParam, user: ObserverParam) => {
  alert(`${getTimeStamp()}: ${user} changed state into -> ${state}`)
}

export const logStateChange = (state: ObserverParam["state"], user?: ObserverParam["user"]) => {
  const time = setTime(new Date())
  // create new instance from abstract factory
  const createStateLog = new AbstractFactory()
  // Create instance of concrete obj from abstract factory method
  const stateLogObj = createStateLog.createProduct("stateLog")


  // Add event listenet and add the logs to the list 
  stateLogObj.setTime(time)
  stateLogObj.setState(state)
  stateLogObj.setUser(user)
  const loggs = document.getElementById("logger")
  const log = document.createElement("li")
  log.className = 'd-flex justify-content-between align-items-center'
  log.innerHTML = `
  <span class="d-flex align-items-center mt-1 mb-1"> 
    <div>${stateLogObj.user}: &nbsp; </div>
    <div class="text-light bg-primary rounded p-1" style="min-width: 3rem; min-height: 2rem"> ${stateLogObj.state}</div> 
  </span>
  <span class="text-muted">
    ${stateLogObj.timeStamp}
  </span>`
  loggs.appendChild(log)
}
