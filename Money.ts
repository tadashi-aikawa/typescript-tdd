export class Money {
  constructor(protected amount: number, protected _currency: string) {}

  times(multiplier: number): Money | null {
    return null;
  }

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
