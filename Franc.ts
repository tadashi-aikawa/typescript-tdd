import { Money } from "./Money.ts";

export class Franc extends Money {
  times(multiplier: number): Money {
    return new Franc(this.amount * multiplier);
  }
}
