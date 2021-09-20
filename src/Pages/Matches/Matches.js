import React, {useEffect, useState} from 'react'
import { connect, useDispatch } from 'react-redux'
import { fetchData } from '../../store/actions'
import {useRouteMatch} from 'react-router-dom'
import {FETCH_MATCHES} from '../../store/types'

import MatchCard from '../../Components/MatchCard/MatchCard'
import List from '../../Components/List/List'
import Warning from '../../Components/Warning/Warning'

function Matches ({matches, warning}) {

  const initialstate = {dateFrom: '', dateTo: ''}
  const [value, setValue] = useState(initialstate)

  const params = useRouteMatch().params
  const dispatch = useDispatch()
  const url = `http://api.football-data.org/v2/competitions/${params.id}/matches?dateFrom=${value.dateFrom}&dateTo=${value.dateTo}`

  console.log(params)

  useEffect(() => {
    dispatch(fetchData(url, FETCH_MATCHES, 'matches'))
  }, [])

  function onChange (event) {
    const value = event.target.value
    const name = event.target.name
    setValue(current => {
      return {
        ...current, [name]: value
      }
    })
  }

  function search () {
    if (!value?.dateFrom || !value?.dateTo) return
    dispatch(fetchData(url, FETCH_MATCHES, 'matches'))
  }

  function resetQueryParams () {
    setValue(initialstate)
    dispatch(fetchData(url, FETCH_MATCHES, 'matches'))
  }

  return (
    <>
      <h1>Календарь лиги</h1>
      <input 
        type='date' 
        name='dateFrom' 
        value={value.dateFrom}
        onChange={onChange}
      />
      <input 
        type='date' 
        name='dateTo' 
        value={value.dateTo}
        onChange={onChange}
      />
      <button
        onClick={() => search()}
      >
        Search
      </button>
      <button
        onClick={() => resetQueryParams()}
      >
        Reset
      </button>

      {warning ?
        <Warning 
          text='Ошибка загрузки данных с сервера'
          reload={() => dispatch(fetchData(url, FETCH_MATCHES, 'matches'))}
        />
        :
        matches.map(matche => 
          <List
            key={matche.id}
          >
            <MatchCard 
              post={matche} 
            />
          </List>
        )
      }
    </>
  )
}

const mapStateToProps = state => ({
  matches: state.posts.fetchMatches,
  warning: state.app.warning
})

export default connect(mapStateToProps)(Matches)

