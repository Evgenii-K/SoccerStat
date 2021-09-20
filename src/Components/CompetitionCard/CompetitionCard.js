import React from 'react'

function CompetitionCard({post, clickHandler}) {

  return (
    <div 
      className="card"
      onClick={() => clickHandler(post.id)}
    >
      <div className="card-body">
        <div className="row">
          <div className="col">
            <img alt='' src={post.emblemUrl} style={{width: '40px', hieght: '40px'}}/>
          </div>
          <div className="col">
            <h5 className="card-title">{post.area.name}</h5>
          </div>
          <div className="col">
            <h5 className="card-title">{post.name}</h5>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CompetitionCard
