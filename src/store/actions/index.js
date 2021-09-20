import { SHOW_LOADER, HIDE_LOADER, SHOW_WARNING, HIDE_WARNING } from '../types'

const token = 'af11ef2e142b4e2488dc48ec4676a5da'

export function fetchData (url, type, payload) {
  return async dispatch => {
    dispatch({type: HIDE_WARNING})
    dispatch({type: SHOW_LOADER})

    await fetch(url, {
      method: 'GET',
      headers: {'X-Auth-Token': token}
    })
    .then((response) => {
      return response.json()
    })
    .then((data) => {
      console.log('fetchData: ', data)
      dispatch({type: type, payload: data[payload]})
      dispatch({type: HIDE_LOADER})
    })
    .catch((err) => {
      dispatch({type: type, payload: []})
      dispatch({type: SHOW_WARNING})
      dispatch({type: HIDE_LOADER})
      console.error('Ошибка: ', err)
    })
  }
}