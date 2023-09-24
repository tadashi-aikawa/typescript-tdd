import { Money } from "./Money.ts";
import * as factory from "./money-factory.ts";

export class Dollar extends Money {
  constructor(amount: number, currency: string) {
    super(amount, currency);
  }

  times(multiplier: number): Money {
    return new Dollar(this.amount * multiplier, "USD");
  }
}
