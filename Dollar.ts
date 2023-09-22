import { Money } from "./Money.ts";
import * as factory from "./money-factory.ts";

export class Dollar extends Money {
  times(multiplier: number): Money {
    return factory.dollar(this.amount * multiplier);
  }
}
