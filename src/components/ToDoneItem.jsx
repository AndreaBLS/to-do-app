import React from 'react'

export default function ToDoneItem({taskProps}) {
    return (
        <div className="todones-item">
        <p>{taskProps.text}</p>
        <div className="action">
          <button className="btn"> &#8635; </button>
        </div>
      </div>
    )
}
