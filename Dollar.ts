import { Money } from "./Money.ts";

export class Dollar extends Money {
  currency(): string {
    return "USD";
  }
  times(multiplier: number): Money {
    return new Dollar(this.amount * multiplier);
  }
}
