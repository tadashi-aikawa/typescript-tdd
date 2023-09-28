import { Bank } from "./Bank";
import { Expression } from "./Expression";
import { Money } from "./Money";

export class Sum implements Expression {
  constructor(public augend: Expression, public addend: Expression) {}

  plus(addend: Expression): Expression {
    throw new Error("Method not implemented.");
  }

  reduce(bank: Bank, to: string): Money {
    const amount =
      this.augend.reduce(bank, to).amount + this.addend.reduce(bank, to).amount;
    return new Money(amount, to);
  }
}
