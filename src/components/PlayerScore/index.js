import './style.css'

function PlayerScore(points = 0) {
  return /*html*/ `
      <ol data-poinsts="${points}">
          <li>um</li>
          <li>dois</li>
          <li>Tres</li>
      </ol>
  
  `
}

export default PlayerScore
