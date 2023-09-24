import { Money } from "./Money.ts";

export class Dollar extends Money {
  constructor(amount: number, currency: string) {
    super(amount, currency);
  }
}
