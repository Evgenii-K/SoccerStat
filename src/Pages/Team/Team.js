import React, { useEffect, useState } from 'react'
import { useRouteMatch, useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchData } from '../../store/actions'
import List from '../../Components/List/List'
import TeamCard from '../../Components/TeamCard/TeamCard'
import Warning from '../../Components/Warning/Warning'
import { FETCH_TEAM } from '../../store/types'
import LoadingCard from '../../Components/LoadingCard/LoadingCard'

import { Paper, Button, Input, Typography } from '@material-ui/core'
import TableHead from '@material-ui/core/TableHead'
import TableContainer from '@material-ui/core/TableContainer'
import Table from '@material-ui/core/Table'
import TableRow from '@material-ui/core/TableRow'
import TableCell, { tableCellClasses } from '@material-ui/core/TableCell'
import { styled } from '@material-ui/core/styles'
import TableBody from '@material-ui/core/TableBody'

function Team() {
  const initialstate = { dateFrom: '', dateTo: '' }
  const [value, setValue] = useState(initialstate)
  const [isParamsEmpty, setIsParamsEmpty] = useState(true)

  const params = useRouteMatch().params
  const history = useHistory()
  const dispatch = useDispatch()

  const team = useSelector((state) => {
    return state.posts.fetchTeam
  })
  const warning = useSelector((state) => {
    return state.app.warning
  })
  const loading = useSelector((state) => {
    return state.app.loading
  })

  const url = `http://api.football-data.org/v2/teams/${params.id}/matches?dateFrom=${value.dateFrom}&dateTo=${value.dateTo}`

  useEffect(() => {
    dispatch(fetchData(url, FETCH_TEAM, 'matches'))
  }, [])

  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }))

  function onChange(event) {
    const value = event.target.value
    const name = event.target.name
    setValue((current) => {
      return {
        ...current,
        [name]: value,
      }
    })
  }

  function search() {
    if (!value?.dateFrom || !value?.dateTo) return
    dispatch(fetchData(url, FETCH_TEAM, 'matches'))
  }

  function resetQueryParams() {
    setValue(initialstate)
    setIsParamsEmpty((state) => !state)
  }

  useEffect(() => {
    dispatch(fetchData(url, FETCH_TEAM, 'matches'))
  }, [isParamsEmpty])

  return (
    <div>
      <Typography variant="h5" component="div" gutterBottom>
        ?????????????????? ??????????????
      </Typography>
      <Button variant="contained" onClick={() => history.goBack()}>
        ??????????
      </Button>
      <Input type="date" name="dateFrom" value={value.dateFrom} onChange={onChange} />
      <Input type="date" name="dateTo" value={value.dateTo} onChange={onChange} />
      <Button variant="contained" onClick={() => search()}>
        Search
      </Button>
      <Button variant="contained" onClick={() => resetQueryParams()}>
        Reset
      </Button>

      {warning ? (
        <Warning
          text="???????????? ???????????????? ???????????? ?? ??????????????"
          reload={() => dispatch(fetchData(url, FETCH_TEAM, 'matches'))}
        />
      ) : !loading ? (
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell>????????</StyledTableCell>
                <StyledTableCell align="right">????????????</StyledTableCell>
                <StyledTableCell align="right">??????????????</StyledTableCell>
                <StyledTableCell align="right">??????????</StyledTableCell>
                <StyledTableCell align="right">????????</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {team.map((matche) => (
                <TeamCard key={matche.id} matche={matche} />
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      ) : (
        <LoadingCard />
      )}
    </div>
  )
}

export default Team
