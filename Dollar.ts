import { Money } from "./Money.ts";

export class Dollar extends Money {
  constructor(private amount: number) {
    super();
  }

  times(multiplier: number): Dollar {
    return new Dollar(this.amount * multiplier);
  }

  equals(object: object): boolean {
    const dollar = object as Dollar;
    return this.amount === dollar.amount;
  }
}
