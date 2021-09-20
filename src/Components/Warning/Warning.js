import React from 'react'

function Warning({text, reload}) {
  return (
    <div>
      <h1>{text}</h1>
      <button
        onClick={()=> reload()}
      >
        Reload
      </button>
    </div>
  )
}

export default Warning
