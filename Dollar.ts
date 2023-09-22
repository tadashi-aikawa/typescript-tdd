import { Money } from "./Money.ts";

export class Dollar extends Money {
  public readonly currency: string;
  constructor(protected amount: number) {
    super(amount);
    this.currency = "USD";
  }
  times(multiplier: number): Money {
    return new Dollar(this.amount * multiplier);
  }
}
