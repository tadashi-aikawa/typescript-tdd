import { Expression } from "./Expression";
import { Sum } from "./Sum";

export class Money implements Expression {
  constructor(public amount: number, public _currency: string) {}

  reduce(to: string): Money {
    const rate = this.currency === "CHF" && to === "USD" ? 2 : 1;
    return new Money(this.amount / rate, to);
  }

  times(multiplier: number): Money {
    return new Money(this.amount * multiplier, this.currency);
  }

  plus(addend: Money): Expression {
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
