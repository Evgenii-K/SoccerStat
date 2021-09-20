import React from 'react'

import { styled } from '@material-ui/core/styles';
import TableCell, { tableCellClasses } from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

function TeamCard({matche}) {

  const normalizeDate = (date) => {
    if (!date) return
    const year = date.slice(0, 4)
    const mounth = date.slice(5, 7)
    const day = date.slice(8, 10)
    return `${year}.${mounth}.${day}`
  }

  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));
  
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));

  return (
    <>
      <StyledTableRow>
        <StyledTableCell component="th" scope="row">
          {normalizeDate(matche.utcDate)}
        </StyledTableCell>
        <StyledTableCell align="right">{matche.status}</StyledTableCell>
        <StyledTableCell align="right">{matche.homeTeam.name}</StyledTableCell>
        <StyledTableCell align="right">{matche.awayTeam.name}</StyledTableCell>
        <StyledTableCell align="right">{matche.score.fullTime.homeTeam}/{matche.score.fullTime.awayTeam}</StyledTableCell>
      </StyledTableRow>
    </>
  )
}

export default TeamCard
