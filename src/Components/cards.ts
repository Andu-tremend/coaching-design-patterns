import card from "./card"
import { consoleStateChange, logStateChange, alertStateChange } from "./simple.alerts"
import subject from "../Observer/Classes/subject"

const Cards = () => {
  const cardsWrappers: HTMLElement = document.getElementById("card-wrapper")
  const addCardsAction = document.querySelectorAll(".add-card")

  const addCards = () => {
    cardsWrappers?.appendChild(card())
  }
  
  addCardsAction.forEach( (button: HTMLElement) => {
    button.onclick = () => {
      addCards()
      // cardsConfigs()
    }

  })
  
  // Fn to subscribe to observer
  subject.subscribe(consoleStateChange)
  subject.subscribe(logStateChange)
  // subject.subscribe(alertStateChange)
}

export default Cards
