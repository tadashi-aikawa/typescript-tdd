import { Money } from "./Money.ts";

export class Franc extends Money {
  times(multiplier: number): Franc {
    return new Franc(this.amount * multiplier);
  }
}
