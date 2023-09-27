import { Expression } from "./Expression";
import { Sum } from "./Sum";

export class Money implements Expression {
  constructor(protected amount: number, protected _currency: string) {}

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
