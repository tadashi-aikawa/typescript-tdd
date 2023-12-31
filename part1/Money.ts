import { Bank } from "./Bank";
import { Expression } from "./Expression";
import { Sum } from "./Sum";

export class Money implements Expression {
  constructor(public amount: number, public _currency: string) {}

  reduce(bank: Bank, to: string): Money {
    const rate = bank.rate(this.currency, to);
    return new Money(this.amount / rate, to);
  }

  times(multiplier: number): Expression {
    return new Money(this.amount * multiplier, this.currency);
  }

  plus(addend: Expression): Expression {
    return new Sum(this, addend);
  }

  get currency(): string {
    return this._currency;
  }

  equals(object: object): boolean {
    const money = object as Money;

    return this.amount === money.amount && this.currency === money.currency;
  }
}
