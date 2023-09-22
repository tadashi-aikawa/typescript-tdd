import { Dollar } from "./Dollar.ts";

export class Money {
  constructor(protected amount: number) {
  }

  static dollar(amount: number): Dollar {
    return new Dollar(amount);
  }

  equals(object: object): boolean {
    const money = object as Money;

    return this.amount === money.amount &&
      this.constructor.name === object.constructor.name;
  }
}
