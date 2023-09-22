import { Money } from "./Money.ts";

export class Dollar extends Money {
  constructor(amount: number) {
    super(amount, "USD");
  }
  times(multiplier: number): Money {
    return new Dollar(this.amount * multiplier);
  }
}
