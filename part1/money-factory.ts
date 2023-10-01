import { Money } from "./Money.ts";

export function dollar(amount: number): Money {
  return new Money(amount, "USD");
}

export function franc(amount: number): Money {
  return new Money(amount, "CHF");
}
