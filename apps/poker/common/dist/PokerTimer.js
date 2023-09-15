var _a;
import { immerable, produce } from "immer";
export class PokerTimer extends Date {
    constructor(...args) {
        super(...args);
        this[_a] = true;
        this.date = new Date();
        this.hour = this.date.getHours();
        this.minute = this.date.getMinutes();
        this.second = this.date.getSeconds();
    }
    get timeReadable() {
        return `${this.hour}:${this.minute}:${this.second}`;
    }
    get timeUTC() {
        return this.date;
    }
    getNextActionTimeUTC() {
        const newDate = this.date;
        const newActionTimeUTC = newDate.setSeconds(newDate.getSeconds() + this.getRandomArbitrary(15, 30));
        return newActionTimeUTC;
    }
    getRandomArbitrary(min, max) {
        return Math.floor((Math.random() * (max - min + 1)) << 0);
    }
    tick() {
        return produce(this, draft => {
            draft.minute++;
        });
    }
    processAction(action) {
        if (!action || !action.action)
            throw new Error('action is undefined');
        // @ts-expect-error
        const producer = actions[action.action];
        if (!producer)
            throw new Error(`unknown action ${action.action}`);
        // @ts-expect-error
        return producer(this, action);
    }
}
_a = immerable;
//# sourceMappingURL=PokerTimer.js.map