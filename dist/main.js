/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Abstract.factory/abstract.factory.ts":
/*!**************************************************!*\
  !*** ./src/Abstract.factory/abstract.factory.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const state_log_factory_1 = __webpack_require__(/*! ./state.log.factory */ "./src/Abstract.factory/state.log.factory.ts");
class AbstractFactory {
    createProduct(type) {
        switch (type) {
            case "stateLog":
                return new state_log_factory_1.default();
            case "createUser":
                return;
        }
        return null;
    }
}
exports["default"] = AbstractFactory;


/***/ }),

/***/ "./src/Abstract.factory/state.log.factory.ts":
/*!***************************************************!*\
  !*** ./src/Abstract.factory/state.log.factory.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
class StateLogFactory {
    time;
    stateText;
    userName;
    formatTime(time) {
        return `${time.day} ${time.hour}:${time.minutes}:${time.seconds}`;
    }
    setTime(time) {
        this.time = time;
    }
    setState(stateText) {
        this.stateText = stateText;
    }
    setUser(userName) {
        this.userName = userName;
    }
    get user() {
        return this.userName;
    }
    get state() {
        return this.stateText;
    }
    get timeStamp() {
        return this.formatTime(this.time);
    }
}
exports["default"] = StateLogFactory;


/***/ }),

/***/ "./src/Components/card.ts":
/*!********************************!*\
  !*** ./src/Components/card.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const index_1 = __webpack_require__(/*! ../Facade/index */ "./src/Facade/index.ts");
const Card = () => {
    let userNameString;
    const wrapper = document.createElement("div");
    wrapper.className = "col-lg-4  p-3";
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
  `; // Dunno how to beautify this :/
    new index_1.default(wrapper);
    return wrapper;
};
exports["default"] = Card;


/***/ }),

/***/ "./src/Components/cards.ts":
/*!*********************************!*\
  !*** ./src/Components/cards.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const card_1 = __webpack_require__(/*! ./card */ "./src/Components/card.ts");
const simple_alerts_1 = __webpack_require__(/*! ./simple.alerts */ "./src/Components/simple.alerts.ts");
const subject_1 = __webpack_require__(/*! ../Observer/Classes/subject */ "./src/Observer/Classes/subject.ts");
const Cards = () => {
    const cardsWrappers = document.getElementById("card-wrapper");
    const addCardsAction = document.querySelectorAll(".add-card");
    const addCards = () => {
        cardsWrappers?.appendChild((0, card_1.default)());
    };
    addCardsAction.forEach((button) => {
        button.onclick = () => {
            addCards();
            // cardsConfigs()
        };
    });
    // Fn to subscribe to observer
    subject_1.default.subscribe(simple_alerts_1.consoleStateChange);
    subject_1.default.subscribe(simple_alerts_1.logStateChange);
    // subject.subscribe(alertStateChange)
};
exports["default"] = Cards;


/***/ }),

/***/ "./src/Components/set.username.ts":
/*!****************************************!*\
  !*** ./src/Components/set.username.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
class SetUserName {
    elementToAppendTo;
    constructor(elementToAppendTo) {
        this.elementToAppendTo = elementToAppendTo;
    }
    get userNameForm() {
        return this.setUserNameForm();
    }
    get removeUsernameForm() {
        return this.removeUserNameForm();
    }
    setUserNameForm() {
        const userWrapper = document.createElement("div");
        userWrapper.className = "user-name-form";
        userWrapper.innerHTML = `
    <div class="form-floating  mb-3 mt-3">
      <input type="text" class="form-control set-username-form" value="" id="floatingInput" placeholder="Set username">
      <label for="floatingInput">Set username</label>
    </div>
    <a href="#" class="btn btn-primary set-username">Set Username</a>
    `;
        this.elementToAppendTo.appendChild(userWrapper);
    }
    removeUserNameForm() {
        this.elementToAppendTo
            .querySelectorAll(".user-name-form")
            .forEach(element => element.remove());
    }
    setUserName(e) {
        const target = e.target;
        const setUserNameInput = target.parentElement.querySelector(".form-control");
        return setUserNameInput.value;
    }
}
exports["default"] = SetUserName;


/***/ }),

/***/ "./src/Components/simple.alerts.ts":
/*!*****************************************!*\
  !*** ./src/Components/simple.alerts.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.logStateChange = exports.alertStateChange = exports.consoleStateChange = void 0;
const abstract_factory_1 = __webpack_require__(/*! ../Abstract.factory/abstract.factory */ "./src/Abstract.factory/abstract.factory.ts");
const setTime = (date) => {
    return {
        hour: date.getHours(),
        minutes: date.getMinutes(),
        seconds: date.getSeconds(),
        year: date.getFullYear(),
        day: date.toLocaleString('default', { weekday: 'short' }),
        month: date.toLocaleString('default', { month: 'short' })
    };
};
const timeString = (time) => {
    return `${time.day} ${time.month} ${time.year} ${time.hour + `:` + time.minutes + `:` + time.seconds}`;
};
const getTimeStamp = () => {
    const consoleTime = setTime(new Date());
    return timeString(consoleTime);
};
const consoleStateChange = (state, user) => {
    console.log(`${getTimeStamp()}: ${user} changed state into -> ${state}`);
};
exports.consoleStateChange = consoleStateChange;
const alertStateChange = (state, user) => {
    alert(`${getTimeStamp()}: ${user} changed state into -> ${state}`);
};
exports.alertStateChange = alertStateChange;
const logStateChange = (state, user) => {
    const time = setTime(new Date());
    // create new instance from abstract factory
    const createStateLog = new abstract_factory_1.default();
    // Create instance of concrete obj from abstract factory method
    const stateLogObj = createStateLog.createProduct("stateLog");
    // Add event listenet and add the logs to the list 
    stateLogObj.setTime(time);
    stateLogObj.setState(state);
    stateLogObj.setUser(user);
    const loggs = document.getElementById("logger");
    const log = document.createElement("li");
    log.className = 'd-flex justify-content-between align-items-center';
    log.innerHTML = `
  <span class="d-flex align-items-center mt-1 mb-1"> 
    <div>${stateLogObj.user}: &nbsp; </div>
    <div class="text-light bg-primary rounded p-1" style="min-width: 3rem; min-height: 2rem"> ${stateLogObj.state}</div> 
  </span>
  <span class="text-muted">
    ${stateLogObj.timeStamp}
  </span>`;
    loggs.appendChild(log);
};
exports.logStateChange = logStateChange;


/***/ }),

/***/ "./src/Facade/index.ts":
/*!*****************************!*\
  !*** ./src/Facade/index.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const redux_1 = __webpack_require__(/*! ../Singleton/Classes/redux */ "./src/Singleton/Classes/redux.ts");
const Actions_1 = __webpack_require__(/*! ../Singleton/Actions */ "./src/Singleton/Actions/index.ts");
const subject_1 = __webpack_require__(/*! ../Observer/Classes/subject */ "./src/Observer/Classes/subject.ts");
const set_username_1 = __webpack_require__(/*! ../Components/set.username */ "./src/Components/set.username.ts");
class CardConfigFacade {
    parentEl;
    stateHtmlActions;
    cardBody;
    fakeData;
    constructor(parentElement) {
        this.parentEl = parentElement;
        this.getDomActions(this.parentEl, ".set-state");
        this.stateHtmlActions.forEach((button) => {
            button.onclick = (e) => { this.handleClick(e); };
        });
        this.getDomActions(this.parentEl, ".get-state");
        this.stateHtmlActions.forEach((button) => {
            button.onclick = (e) => { this.handleGetState(e); };
        });
        this.setUsername();
        this.fetchAnAPI().then(data => {
            this.fetchAnAPI = data;
        })
            .then(() => console.log(this.fakeData));
    }
    fetchAnAPI() {
        return fetch("https://jsonplaceholder.typicode.com/users")
            .then(res => res.json());
    }
    userName;
    setUsername() {
        const cardBody = this.parentEl.querySelectorAll(".card-body")[0];
        const user = new set_username_1.default(cardBody);
        user.userNameForm;
        cardBody.querySelectorAll(".set-username").forEach((button) => {
            button.onclick = (e) => {
                user.removeUsernameForm;
                this.parentEl.querySelectorAll(".user-name")[0].innerHTML = user.setUserName(e);
                this.userName = user.setUserName(e);
            };
        });
    }
    getDomActions(parentElement, selector) {
        this.stateHtmlActions = parentElement.querySelectorAll(selector);
    }
    setState(state) {
        redux_1.default.dispatch((0, Actions_1.changeText)(state));
    }
    handleGetState(e) {
        const target = e.target;
        const stateVal = target.parentNode?.querySelectorAll(".state-val");
        stateVal[0].innerHTML = JSON.stringify(redux_1.default.state.text);
    }
    handleGetStateGlobal() {
        const stateVals = document.querySelectorAll(".state-val");
        stateVals.forEach(stateVal => stateVal.innerHTML = JSON.stringify(redux_1.default.state.text));
    }
    handleClick(e) {
        const target = e.target;
        const cardInput = target.parentElement.querySelector(".form-control");
        this.setState(cardInput.value);
        this.globalStateSwitch();
        subject_1.default.notify(redux_1.default.state.text, this.userName);
    }
    globalStateSwitch() {
        const switchElem = document.getElementById("flexSwitchCheckDefault");
        switchElem.checked && this.handleGetStateGlobal();
        switchElem.onclick = () => {
            switchElem.checked && this.handleGetStateGlobal();
        };
    }
}
exports["default"] = CardConfigFacade;


/***/ }),

/***/ "./src/Observer/Classes/subject.ts":
/*!*****************************************!*\
  !*** ./src/Observer/Classes/subject.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
class Subject {
    observers = [];
    subscribe(observer) {
        this.observers.push(observer);
    }
    unsubscribe(observer) {
        this.observers = this.observers.filter((prop) => { return prop !== observer; });
    }
    notify(observerFn, user) {
        this.observers.forEach((observer) => observer(observerFn, user));
    }
}
exports["default"] = new Subject();


/***/ }),

/***/ "./src/Singleton/Actions/index.ts":
/*!****************************************!*\
  !*** ./src/Singleton/Actions/index.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.changeText = exports.addProduct = exports.usersAction = void 0;
const redux_enums_1 = __webpack_require__(/*! ../Enums/redux.enums */ "./src/Singleton/Enums/redux.enums.ts");
const usersAction = (payload) => {
    return {
        type: redux_enums_1.ReduxActionsEnum.users,
        payload: payload
    };
};
exports.usersAction = usersAction;
const addProduct = (payload) => {
    return {
        type: redux_enums_1.ReduxActionsEnum.products,
        payload: payload
    };
};
exports.addProduct = addProduct;
const changeText = (payload) => {
    return {
        type: redux_enums_1.ReduxActionsEnum.text,
        payload: payload
    };
};
exports.changeText = changeText;


/***/ }),

/***/ "./src/Singleton/Classes/redux.ts":
/*!****************************************!*\
  !*** ./src/Singleton/Classes/redux.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const index_1 = __webpack_require__(/*! ../Reducers/index */ "./src/Singleton/Reducers/index.ts");
let instance;
let stateContainer = {};
class useStateClass {
    constructor() {
        if (instance) {
            throw new Error("Already instanciated");
        }
        instance = this;
    }
    get state() {
        return stateContainer;
    }
    dispatch(action) {
        const currentState = this.state;
        const reducer = (0, index_1.simpleReducer)(currentState, action);
        this.setState(action.type, reducer[action.type]);
    }
    _state;
    setOldState(state) {
        const dateChanged = new Date();
        const oldState = [];
        const oldStateSnapshot = {
            dateChanged,
            state
        };
        oldState.push(oldStateSnapshot);
        return oldState;
    }
    setState(stateProp, stateData) {
        stateContainer = {
            ...stateContainer,
            [stateProp]: stateData
        };
    }
}
const useState = Object.freeze(new useStateClass());
exports["default"] = useState;


/***/ }),

/***/ "./src/Singleton/Enums/redux.enums.ts":
/*!********************************************!*\
  !*** ./src/Singleton/Enums/redux.enums.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ReduxActionsEnum = void 0;
var ReduxActionsEnum;
(function (ReduxActionsEnum) {
    ReduxActionsEnum["users"] = "users";
    ReduxActionsEnum["products"] = "products";
    ReduxActionsEnum["text"] = "text";
    ReduxActionsEnum["userName"] = "username";
})(ReduxActionsEnum = exports.ReduxActionsEnum || (exports.ReduxActionsEnum = {}));


/***/ }),

/***/ "./src/Singleton/Reducers/index.ts":
/*!*****************************************!*\
  !*** ./src/Singleton/Reducers/index.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.simpleReducer = void 0;
const redux_enums_1 = __webpack_require__(/*! ../Enums/redux.enums */ "./src/Singleton/Enums/redux.enums.ts");
const simpleReducer = (state = {}, action) => {
    switch (action.type) {
        case redux_enums_1.ReduxActionsEnum.users:
            return {
                ...state,
                [action.type]: action.payload
            };
        case redux_enums_1.ReduxActionsEnum.products:
            return {
                ...state,
                [action.type]: action.payload
            };
        case redux_enums_1.ReduxActionsEnum.text:
            return {
                ...state,
                [action.type]: action.payload
            };
    }
    return state;
};
exports.simpleReducer = simpleReducer;


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;
/*!********************!*\
  !*** ./src/app.ts ***!
  \********************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
const cards_1 = __webpack_require__(/*! ./Components/cards */ "./src/Components/cards.ts");
document.addEventListener("DOMContentLoaded", () => {
    (0, cards_1.default)();
});

})();

/******/ })()
;