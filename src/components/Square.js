import React from 'react'

const Square = ({squares, handClick, restart}) => {
  return (
    <div className= "grid">
      {squares.map((squares, index) => (
        <div 
          key={index}
          className="square"
          onClick={() => handClick(index)}
        >
          {squares}
        </div>
        ))}
        <button onClick={() => restart()}>Restart Game</button>
    </div>
    )
}
export default Square


