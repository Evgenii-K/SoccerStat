import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchData } from '../../store/actions'
import List from '../../Components/List/List'
import TeamsListCard from '../../Components/TeamsListCard/TeamsListCard'
import { useHistory, useRouteMatch } from 'react-router-dom'
import { FETCH_TEAMS } from '../../store/types'

function Teams() {
  const history = useHistory()
  const params = useRouteMatch()
  const dispatch = useDispatch()

  const teams = useSelector((state) => {
    return state.posts.fetchTeams
  })

  console.log('params: ', params.params)

  const url = `http://api.football-data.org/v2/competitions/${params.params.id}/teams`

  useEffect(() => {
    dispatch(fetchData(url, FETCH_TEAMS, 'teams'))
  }, [])

  const clickHandler = (id) => {
    history.push(`/team/${id}`)
  }

  return (
    <>
      <h1>Список команд</h1>
      <List data={teams} clickHandler={clickHandler}>
        <TeamsListCard />
      </List>
    </>
  )
}

export default Teams
