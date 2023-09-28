import { Bank } from "./Bank";
import { Money } from "./Money";

export interface Expression {
  plus(addend: Expression): Expression;
  reduce(bank: Bank, to: string): Money;
}
