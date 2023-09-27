import { Expression } from "./Expression";
import { Money } from "./Money";

export class Sum implements Expression {
  constructor(public augend: Money, public addend: Money) {}
}
