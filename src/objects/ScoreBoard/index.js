import './style.css'
import PlayerName from '../../components/PlayerName'
import PunctuationGame from '../../components/PunctuationGame'
import VsPlayer from '../../components/VsPlayer'

function ScoreBoard() {
  return /*html*/ `
  <header class="score-board">
  ${PlayerName(1)}
  ${PunctuationGame()}
  ${VsPlayer()}
  ${PunctuationGame()}  
  ${PlayerName(2)}

  </header>`
}

export default ScoreBoard
