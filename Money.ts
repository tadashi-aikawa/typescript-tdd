export class Money {
  constructor(protected amount: number) {
  }

  equals(object: object): boolean {
    const money = object as Money;
    return this.amount === money.amount;
  }
}
