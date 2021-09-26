import React from 'react'

function CompetitionCard({ team, clickHandler }) {
  return (
    <div className="card" onClick={() => clickHandler(team.id)}>
      <div className="card-body">
        <div className="row">
          <div className="col">
            <img alt="" src={team.emblemUrl} style={{ width: '40px', hieght: '40px' }} />
          </div>
          <div className="col">
            <h5 className="card-title">{team.area.name}</h5>
          </div>
          <div className="col">
            <h5 className="card-title">{team.name}</h5>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CompetitionCard
