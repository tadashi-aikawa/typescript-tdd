import { Money } from "./Money.ts";
import * as factory from "./money-factory.ts";

export class Franc extends Money {
  times(multiplier: number): Money {
    return factory.franc(this.amount * multiplier);
  }
}
