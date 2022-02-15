import CardGame from "../CardGame"

function CardFrontBack() {
  return `

      <article class="card-front-back">
        ${CardGame()}
        ${CardGame('javascript', 'JavaScript')}
      </article>
      

  `
}

export default CardFrontBack