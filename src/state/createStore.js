import { createStore  } from "redux"

const reducer = (state, {type , payload}) => {
  if (type === `MODAL`) {
    return Object.assign({}, state, {
        payload: payload,
    })
  }
  return state
}

const initialState = { payload: false }

const store = () => createStore(reducer, initialState)
export default store
