class SetUserName {

  private elementToAppendTo: HTMLElement

  constructor(elementToAppendTo: HTMLElement) {
    this.elementToAppendTo = elementToAppendTo
  }

  get userNameForm () {
    return this.setUserNameForm()
  }

  get removeUsernameForm () {
    return this.removeUserNameForm()
  }


  private setUserNameForm () {
    const userWrapper = document.createElement("div")
    userWrapper.className = "user-name-form"
    userWrapper.innerHTML = `
    <div class="form-floating  mb-3 mt-3">
      <input type="text" class="form-control set-username-form" value="" id="floatingInput" placeholder="Set username">
      <label for="floatingInput">Set username</label>
    </div>
    <a href="#" class="btn btn-primary set-username">Set Username</a>
    `
    this.elementToAppendTo.appendChild(userWrapper)
  }

  private removeUserNameForm () {
    this.elementToAppendTo
      .querySelectorAll(".user-name-form")
      .forEach( element => element.remove())
  }

  setUserName (e: Event) {
    const target = e.target as HTMLElement
    const setUserNameInput = target.parentElement.querySelector(".form-control") as HTMLInputElement
    return setUserNameInput.value
  }

}


export default SetUserName