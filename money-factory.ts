import { Dollar } from "./Dollar.ts";
import { Franc } from "./Franc.ts";
import { Money } from "./Money.ts";

export function dollar(amount: number): Money {
  return new Dollar(amount, "USD");
}

export function franc(amount: number): Money {
  return new Franc(amount, "CHF");
}
