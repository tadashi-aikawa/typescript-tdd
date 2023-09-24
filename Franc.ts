import { Money } from "./Money.ts";

export class Franc extends Money {
  constructor(amount: number, currency: string) {
    super(amount, currency);
  }
}
