import StateLogFactory from "./state.log.factory"

export default class AbstractFactory {
  createProduct(type: string) {
    switch(type) {
      case "stateLog":
        return new StateLogFactory ()
      case "createUser":
        return 
    }
    return null 
  }
}
