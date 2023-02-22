import {ReduxActionsEnum} from '../Enums/redux.enums'

export const usersAction = (payload: any) => {
  return {
    type: ReduxActionsEnum.users,
    payload: payload
  }
}

export const addProduct = (payload: any) => {
  return {
    type: ReduxActionsEnum.products,
    payload: payload
  }
}

export const changeText = (payload: string) => {
  return {
    type: ReduxActionsEnum.text,
    payload: payload
  }
}
