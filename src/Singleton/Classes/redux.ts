import { simpleReducer } from "../Reducers/index";

let instance: useStateClass;
let stateContainer: any = {}

 class useStateClass {

  constructor() {
    if (instance) {
      throw new Error("Already instanciated")
    }
      instance = this
  }

  get state () {
    return stateContainer
  }

  dispatch(action: {type: string, payload: any}) {
    const currentState = this.state
    const reducer = simpleReducer(currentState, action)
    this.setState(action.type, reducer[action.type])
  }

  private _state: any
  
  private setOldState(state:any) {
    const dateChanged = new Date()
    const oldState:any[] = []
    const oldStateSnapshot = {
      dateChanged,
      state
    }
    oldState.push(oldStateSnapshot)
    return oldState
  }
  
  private setState(stateProp: any, stateData: any) {
    stateContainer = {
      ...stateContainer,
      [stateProp]: stateData
    }
  }

}

const useState = Object.freeze(new useStateClass())

export default useState
