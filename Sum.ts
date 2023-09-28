import { Bank } from "./Bank";
import { Expression } from "./Expression";
import { Money } from "./Money";

export class Sum implements Expression {
  constructor(public augend: Money, public addend: Money) {}

  reduce(bank: Bank, to: string): Money {
    const amount =
      this.augend.reduce(bank, to).amount + this.addend.reduce(bank, to).amount;
    return new Money(amount, to);
  }
}
