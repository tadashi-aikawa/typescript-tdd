import { Money } from "./Money.ts";

export class Franc extends Money {
  public readonly currency: string;
  constructor(protected amount: number) {
    super(amount);
    this.currency = "CHF";
  }
  times(multiplier: number): Money {
    return new Franc(this.amount * multiplier);
  }
}
