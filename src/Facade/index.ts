import useState from "../Singleton/Classes/redux"
import {changeText} from "../Singleton/Actions"
import subject from "../Observer/Classes/subject"
import SetUserName from "../Components/set.username";

class CardConfigFacade {
  parentEl: HTMLElement;
  stateHtmlActions: NodeListOf<HTMLElement>;
  cardBody: HTMLElement;
  fakeData: any


  constructor (parentElement: HTMLElement) {
    this.parentEl = parentElement

    this.getDomActions(this.parentEl, ".set-state")

    this.stateHtmlActions.forEach( (button: HTMLButtonElement) => {
      button.onclick = (e: Event) => {this.handleClick(e)}
    })

    this.getDomActions(this.parentEl, ".get-state")

    this.stateHtmlActions.forEach( (button: HTMLButtonElement) => {
      button.onclick = (e: Event) => {this.handleGetState(e)}
    })

    this.setUsername()
  }

  private userName: string;
 
  private setUsername () {
    const cardBody = this.parentEl.querySelectorAll(".card-body")[0] as HTMLElement
    const user = new SetUserName(cardBody)
    user.userNameForm

    cardBody.querySelectorAll(".set-username").forEach((button: HTMLElement) => {
      button.onclick = (e: Event) => {
        user.removeUsernameForm
        this.parentEl.querySelectorAll(".user-name")[0].innerHTML = user.setUserName(e)
        this.userName = user.setUserName(e)
      }
    })
  }

  private getDomActions (parentElement: HTMLElement, selector: string) {
    this.stateHtmlActions = parentElement.querySelectorAll(selector)
  } 

  private setState (state: string) {
    useState.dispatch(changeText(state))
  }

  private handleGetState (e: Event) {
    const target = e.target as HTMLElement 
    const stateVal = target.parentNode?.querySelectorAll(".state-val")
    stateVal![0].innerHTML = JSON.stringify(useState.state.text)
  }

  private handleGetStateGlobal () {
    const stateVals = document.querySelectorAll(".state-val") as NodeListOf<Element>
    stateVals.forEach( stateVal => stateVal.innerHTML = JSON.stringify(useState.state.text))
  }

  private handleClick (e: Event) {
    const target = e.target as HTMLElement
    const cardInput = target.parentElement!.querySelector(".form-control") as HTMLInputElement
    this.setState(cardInput.value)
    this.globalStateSwitch()  
    subject.notify(useState.state.text, this.userName)
  }

  private globalStateSwitch () {
    const switchElem = document.getElementById("flexSwitchCheckDefault") as HTMLInputElement
    switchElem.checked && this.handleGetStateGlobal()
    switchElem.onclick = () => {
      switchElem.checked && this.handleGetStateGlobal()
    }
  }
}

export default CardConfigFacade