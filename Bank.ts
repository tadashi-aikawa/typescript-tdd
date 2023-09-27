import * as factory from "./money-factory.ts";
import { Expression } from "./Expression";
import { Money } from "./Money";
import { Sum } from "./Sum.ts";

export class Bank {
  reduce(source: Expression, to: string): Money {
    const sum = source as Sum;
    const amount = sum.augend.amount + sum.addend.amount;
    return new Money(amount, to);
  }
}
