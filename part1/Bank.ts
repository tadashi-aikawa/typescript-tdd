import { Expression } from "./Expression";
import { Money } from "./Money";

export class Bank {
  private rates: Map<string, number> = new Map();
  private hash(from: string, to: string): string {
    return `${from},${to}`;
  }

  reduce(source: Expression, to: string): Money {
    return source.reduce(this, to);
  }

  addRate(from: string, to: string, rate: number) {
    this.rates.set(this.hash(from, to), rate);
  }

  rate(from: string, to: string): number {
    return from === to ? 1 : this.rates.get(this.hash(from, to))!;
  }
}
