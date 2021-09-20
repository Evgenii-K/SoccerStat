import { combineReducers } from "redux";
import postsReducer from './postsReducer'
import appReducer from './appReducer'

export default combineReducers({
  posts: postsReducer,
  app: appReducer
})