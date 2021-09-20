import { HIDE_LOADER, SHOW_LOADER, SHOW_WARNING, HIDE_WARNING } from "../types"

const initialLoadState = {
  loading: false,
  warning: false
}

export default function appReducer (state = initialLoadState, action) {
  switch (action.type) {
    case SHOW_LOADER:
      return ({...state, loading: true})
    case HIDE_LOADER:
      return ({...state, loading: false})
    case SHOW_WARNING:
      return ({...state, warning: true})
    case HIDE_WARNING:
      return ({...state, warning: false})
    default: 
      return state
  }
}