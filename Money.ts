import { Dollar } from "./Dollar.ts";
import { Franc } from "./Franc.ts";

export abstract class Money {
  constructor(protected amount: number) {}

  abstract times(multiplier: number): Money;

  static dollar(amount: number): Money {
    return new Dollar(amount);
  }

  static franc(amount: number): Money {
    return new Franc(amount);
  }

  equals(object: object): boolean {
    const money = object as Money;

    return (
      this.amount === money.amount &&
      this.constructor.name === object.constructor.name
    );
  }
}
