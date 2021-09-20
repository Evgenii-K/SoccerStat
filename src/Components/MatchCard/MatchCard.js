import React from 'react'

function MatchCard ({post}) {

  const normalizeDate = (date) => {
    if (!date) return
    const year = date.slice(0, 4)
    const mounth = date.slice(5, 7)
    const day = date.slice(8, 10)
    return `${year}.${mounth}.${day}`
  }

  const normalizeTeamName = (name) => {
    if (!name) return
    return name.slice(0, name.length - 3)
  }

  return (
    <>
        <div className="card">
          <div className="card-body">
            <h6 className="cart-title">{normalizeDate(post.utcDate)}</h6>
            <h6 className="cart-title">{post.status}</h6>
            <h5 className="card-title">{normalizeTeamName(post.awayTeam.name)}</h5>
            <h5 className="card-title">{normalizeTeamName(post.homeTeam.name)}</h5>
          </div>
        </div>
    </>
  )
}

export default MatchCard

