export abstract class Money {
  constructor(protected amount: number) {}

  abstract times(multiplier: number): Money;

  equals(object: object): boolean {
    const money = object as Money;

    return (
      this.amount === money.amount &&
      this.constructor.name === object.constructor.name
    );
  }
}
