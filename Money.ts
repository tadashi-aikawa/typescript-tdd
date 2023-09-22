export abstract class Money {
  constructor(protected amount: number, protected _currency: string) {}

  abstract times(multiplier: number): Money;
  get currency(): string {
    return this._currency;
  }

  equals(object: object): boolean {
    const money = object as Money;

    return (
      this.amount === money.amount &&
      this.constructor.name === object.constructor.name
    );
  }
}
