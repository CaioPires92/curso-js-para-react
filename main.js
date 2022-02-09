import './src/styles/generic/reset.css'
import './src/styles/settings/colors.css'
import './src/styles/elements/base.css'

import PlayerScore from './src/components/PlayerScore'
import BoardGame from './src/objects/BoardGame'

const $root = document.querySelector('#root')
const $htmlPlayer1 = PlayerScore(1)
const $htmlPlayer2 = PlayerScore(2)
const $htmlBoardGame = BoardGame(6)

$root.insertAdjacentHTML('beforeend', `${$htmlPlayer1} ${$htmlPlayer2}`)
$root.insertAdjacentHTML('beforeend', $htmlBoardGame)
