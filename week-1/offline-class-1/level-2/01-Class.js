
class Animal {
  constructor(name, legCount) {
    this.name = name
    this.legCount = legCount
  }

  static onlyFor(str){
    console.log("Hello this can called without instantiating "+str)
  }
  describe() {
    return `${this.name} has ${this.legCount} legs`
  }
}

let new1=Animal.onlyFor("for u")

new1
