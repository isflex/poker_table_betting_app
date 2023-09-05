import {
  immerable,
  produce
} from "immer"

export class PokerTimer extends Date {
  [immerable] = true

  date: Date = new Date()
  
  hour: number

  minute: number

  second: number

  constructor(...args: ConstructorParameters<typeof Date>) {
    super(...args)
    this.hour = this.date.getHours()
    this.minute = this.date.getMinutes()
    this.second = this.date.getSeconds()
  }

  get timeReadable() {
    return `${this.hour}:${this.minute}:${this.second}`
  }

  get timeUTC() {
    return this.date
  }

  getNextActionTimeUTC() {
    const newDate = this.date
    const newActionTimeUTC = newDate.setSeconds(newDate.getSeconds() + this.getRandomArbitrary(15, 30))
    return newActionTimeUTC
  }

  getRandomArbitrary(min: number, max: number) {
    return Math.floor((Math.random() * (max - min + 1) ) << 0)
  }

  tick() {
    return produce(this, draft => {
      draft.minute++
    })
  }
}