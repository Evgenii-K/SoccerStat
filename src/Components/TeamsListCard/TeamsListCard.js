import React from 'react'

function TeamsListCard({ team, clickHandler }) {
  console.log(team)

  return (
    <div className="card" onClick={() => clickHandler(team.id)}>
      <div className="card-body" key={team.id}>
        <h3 className="card-title">{team.id}</h3>
        <img alt="" src={team.crestUrl} style={{ width: '40px', hieght: '40px' }} />
        <h3 className="card-title">{team.shortName}</h3>
      </div>
    </div>
  )
}

export default TeamsListCard
