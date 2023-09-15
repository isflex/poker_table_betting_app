import { immerable } from "immer";
export declare class PokerTimer extends Date {
    [action: string]: any;
    [immerable]: boolean;
    date: Date;
    hour: number;
    minute: number;
    second: number;
    constructor(...args: ConstructorParameters<typeof Date>);
    get timeReadable(): string;
    get timeUTC(): Date;
    getNextActionTimeUTC(): number;
    getRandomArbitrary(min: number, max: number): number;
    tick(): this;
    processAction(action: PokerTimer): unknown;
}
