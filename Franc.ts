import { Money } from "./Money.ts";

export class Franc extends Money {
  constructor(amount: number) {
    super(amount, "CHF");
  }
  times(multiplier: number): Money {
    return new Franc(this.amount * multiplier);
  }
}
