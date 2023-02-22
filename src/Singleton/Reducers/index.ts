import { ReduxActionsEnum } from "../Enums/redux.enums"

export const simpleReducer = (state: any = {}, action: {type: string, payload: any}) => {
  switch (action.type) {
    case ReduxActionsEnum.users:
      return {
        ...state,
        [action.type]: action.payload
      }
    case ReduxActionsEnum.products:
      return {
        ...state,
        [action.type]: action.payload
      }

    case ReduxActionsEnum.text:
      return {
        ...state,
        [action.type]: action.payload
      }
  }

  return state
}

