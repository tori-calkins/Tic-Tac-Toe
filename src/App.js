import React, { useState } from 'react'
import Square from './components/Square'
import './App.css'

const App = () => {
  const [squares, setSquares] = useState(Array(9).fill(null))
  const [playerX, setPlayerX] = useState([])
  const [playerO, setPlayerO] = useState([])
  const [value, setValue] = useState(true)

// this function is in charge of user inputs and switching whose turn it is
  const handClick = (selectedIndex) => {
    if(squares[selectedIndex] === null){
      if(value){
        squares[selectedIndex] = "❌"
        setPlayerX([...playerX, selectedIndex])
      }else{
        squares[selectedIndex] = "⭕️"
        setPlayerO([...playerO, selectedIndex])
      }
      setSquares([...squares])
      setValue(!value)
    }
  }

//this function is for determining the winner
const winnerWinner = () => {
  const winningAnswersArray = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ] 
  for (let i = 0; i < winningAnswersArray.length; i++){
    const [a, b, c] = winningAnswersArray[i]
    if (
      playerX.includes(a) && playerX.includes(b) && playerX.includes(c)
    ){
      return "winner is  ❌"
    } 
    else if (
      playerO.includes(a) && playerO.includes(b) && playerO.includes(c)
    ){
      return "winner is  ⭕️"
    } 
  }
    if(playerX.length + playerO.length === 9) {
      return "Game Over"
  }
  return null
}

// This variable calls on who the winner is
const winner = winnerWinner()

// This function manages restarting the game
const restart = () => {
  setPlayerX([])
  setPlayerO([])
  setValue(true)
  setSquares(Array(9).fill(null))
}


  return (
    <>
      <h1 className="title">Tic Tac Toe</h1>
      <Square 
      squares={squares}
      value={value}
      handClick={handClick}
      restart={restart}
      />
      <div className="winnerTextBox">
      {winner}
      </div>
    </>
  )
}

export default App

