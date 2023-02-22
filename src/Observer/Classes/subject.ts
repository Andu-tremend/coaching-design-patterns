
class Subject { 
  observers:any[] = []

  subscribe(observer: any) {
    this.observers.push(observer)
  }

  unsubscribe(observer: any) {
    this.observers = this.observers.filter((prop) => {return prop !== observer})
  } 

  notify(observerFn:any, user?: string) {
    this.observers.forEach( (observer) => observer(observerFn, user))
  }
}

export default new Subject()