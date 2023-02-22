let instance: any;

let statesContainer:any = {
}

class GlobalState {
  constructor() {
    if (instance) {
      throw new Error("Already instanciated")
    }
    instance = this
  }

  setState(stateProp: any, stateData: any) {
    statesContainer = {
      ...statesContainer,
      [stateProp]: stateData
    }
  }

  getState () {
    return statesContainer
  }

}

const globalStateInstance = Object.freeze(new GlobalState())

export default globalStateInstance