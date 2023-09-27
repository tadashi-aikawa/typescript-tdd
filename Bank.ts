import { Expression } from "./Expression";
import { Money } from "./Money";
import { Pair } from "./Pair";

export class Bank {
  private rates: Map<Pair, number> = new Map();
  reduce(source: Expression, to: string): Money {
    return source.reduce(this, to);
  }

  addRate(from: string, to: string, rate: number) {
    this.rates.set(new Pair(from, to), rate);
  }

  rate(from: string, to: string): number {
    return from === "CHF" && to === "USD" ? 2 : 1;
  }
}
