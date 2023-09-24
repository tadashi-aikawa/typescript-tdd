import { describe, expect, test } from "bun:test";
import { Money } from "./Money.ts";
import * as factory from "./money-factory.ts";

describe("Moneyのテスト", () => {
  test("multiplicationのテスト", () => {
    const five: Money = factory.dollar(5);
    expect(five.times(2)).toEqual(factory.dollar(10));
    expect(five.times(3)).toEqual(factory.dollar(15));
  });

  test("フランのmultiplicationのテスト", () => {
    const five = factory.franc(5);
    expect(five.times(2)).toEqual(factory.franc(10));
    expect(five.times(3)).toEqual(factory.franc(15));
  });

  test("equalityのテスト", () => {
    expect(factory.dollar(5)).toEqual(factory.dollar(5));
    expect(factory.dollar(5)).not.toEqual(factory.dollar(6));

    expect(factory.franc(5)).toEqual(factory.franc(5));
    expect(factory.franc(5)).not.toEqual(factory.franc(6));
    expect(factory.franc(5)).not.toEqual(factory.dollar(5));
  });

  test("currencyのテスト", () => {
    expect("USD").toBe(factory.dollar(1).currency);
    expect("CHF").toBe(factory.franc(1).currency);
  });
});
