import React, { cloneElement } from 'react'
import { connect, useDispatch } from 'react-redux'

import Warning from '../../Components/Warning/Warning'
import LoadingCard from '../../Components/LoadingCard/LoadingCard'

import {
  Paper,
  TableContainer,
  Table,
  TableRow,
  TableCell,
  tableCellClasses,
  TableHead,
  TableBody,
} from '@material-ui/core'
import { styled } from '@material-ui/core/styles'

function List({ warning, loading, data, clickHandler, children }) {
  // const dispatch = useDispatch()

  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }))

  return (
    <>
      {warning ? (
        <Warning text="Ошибка загрузки данных с сервера" reload={() => console.log('back')} />
      ) : !loading ? (
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell>id</StyledTableCell>
                <StyledTableCell align="right">img</StyledTableCell>
                <StyledTableCell align="right">name</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((item) =>
                cloneElement(children, { team: item, clickHandler: clickHandler }),
              )}
            </TableBody>
          </Table>
        </TableContainer>
      ) : (
        <LoadingCard />
      )}
    </>
  )
}

const mapStateToProps = (state) => ({
  matches: state.posts.fetchMatches,
  warning: state.app.warning,
})

export default connect(mapStateToProps)(List)

// reload={() => dispatch(fetchData())}
