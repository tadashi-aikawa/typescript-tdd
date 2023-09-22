import { Money } from "./Money.ts";

export class Dollar extends Money {
  times(multiplier: number): Money {
    return new Dollar(this.amount * multiplier);
  }
}
