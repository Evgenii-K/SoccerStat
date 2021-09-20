import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {fetchData} from '../../store/actions'
import List from '../../Components/List/List'
import CompetitionCard from '../../Components/CompetitionCard/CompetitionCard'
import {useHistory} from 'react-router-dom'
import Warning from '../../Components/Warning/Warning'
import {FETCH_COMPETITIONS} from '../../store/types'

function Competitions() {

  const history = useHistory()
  const dispatch = useDispatch()
  
  const posts = useSelector((state) => {
    return state.posts.fetchCompetitions
  })
  const warning = useSelector((state) => {
    return state.app.warning
  })

  const plan = 'TIER_ONE'
  const url = `http://api.football-data.org/v2/competitions?plan=${plan}`
  
  useEffect(() => {
    dispatch(fetchData(url, FETCH_COMPETITIONS, 'competitions'))
  }, [])

  const clickHandler = (id) => {
    history.push(`/matches/${id}`)
  }

  return (
    <>
      <h1>Список лиг</h1>
      {warning ?
        <Warning 
          text='Ошибка загрузки данных с сервера'
          reload={() => dispatch(fetchData(url, FETCH_COMPETITIONS, 'competitions'))}
        />
        :
        posts.map(post => 
          <List
            key={post.id} 
          >
            <CompetitionCard 
              clickHandler={clickHandler}
              post={post}
            />
          </List>
        )
      }
    </>
  )
}

export default Competitions
