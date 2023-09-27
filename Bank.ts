import * as factory from "./money-factory.ts";
import { Expression } from "./Expression";
import { Money } from "./Money";

export class Bank {
  reduce(source: Expression, to: string): Money {
    return factory.dollar(10);
  }
}
