import CardConfig from "../Facade/index"

const Card = () => {

  let userNameString: string
  
  const wrapper = document.createElement("div")
  wrapper.className = "col-lg-4  p-3"
  wrapper.innerHTML = `
    <div class="card" >
      <div class="card-body">
        <h5 class="card-title">User: <span class="user-name">${userNameString}</span></h5>
        <div class="form-floating mb-3 ">
          <input type="text" class="form-control" value="" id="floatingInput" placeholder="change state">
          <label for="floatingInput">Change state</label>
        </div>
        <a href="#" class="btn btn-secondary set-state ">Set state</a>
        <p class="card-text mt-3">Component State</p>
        <p class="state"><b>Global State: </b><span class="state-val"></span></p>
        <a href="#" class="btn btn-primary get-state">Get state</a>
      </div>
    </div>
  ` // Dunno how to beautify this :/

  new CardConfig(wrapper)
  return wrapper
}

export default Card