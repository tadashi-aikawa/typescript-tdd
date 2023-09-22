import { Money } from "./Money.ts";

export class Franc extends Money {
  currency(): string {
    return "CHF";
  }
  times(multiplier: number): Money {
    return new Franc(this.amount * multiplier);
  }
}
