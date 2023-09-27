import { Expression } from "./Expression";

export class Money implements Expression {
  constructor(protected amount: number, protected _currency: string) {}

  times(multiplier: number): Money {
    return new Money(this.amount * multiplier, this.currency);
  }

  plus(addend: Money): Expression {
    return new Money(addend.amount + this.amount, this.currency);
  }

  get currency(): string {
    return this._currency;
  }

  equals(object: object): boolean {
    const money = object as Money;

    return this.amount === money.amount && this.currency === money.currency;
  }
}
