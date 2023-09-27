import * as factory from "./money-factory.ts";
import { Expression } from "./Expression";
import { Money } from "./Money";
import { Sum } from "./Sum.ts";

export class Bank {
  reduce(source: Expression, to: string): Money {
    if (source instanceof Money) {
      return source as Money
    }
    const sum = source as Sum;
    return sum.reduce(to);
  }
}
