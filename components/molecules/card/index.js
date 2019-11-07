import React from 'react'

const Card = (props) => {
  const { color, icon, title, number } = props

  return (
    <div className={`card c-${color ? color : "default"}`}>
      <div className="card__icon">
        {icon}
      </div>
      <div className="card__content">
        <h3>{title}</h3>
        <span>{number}</span>
      </div>
    </div>
  )
}

export default Card