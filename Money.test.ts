import { describe, expect, test } from "bun:test";
import { Money } from "./Money.ts";
import * as factory from "./money-factory.ts";
import { Expression } from "./Expression.ts";
import { Bank } from "./Bank.ts";
import { Sum } from "./Sum.ts";

describe("Moneyのテスト", () => {
  test("同一rateのテスト", () => {
    expect(new Bank().rate("USD", "USD")).toBe(1);
  });

  test("sumPlusのテスト", () => {
    const fiveBucks: Expression = factory.dollar(5);
    const tenFrancs: Expression = factory.franc(10);
    const bank = new Bank();
    bank.addRate("CHF", "USD", 2);
    const sum = new Sum(fiveBucks, tenFrancs).plus(fiveBucks);
    const result = bank.reduce(sum, "USD");
    expect(result).toEqual(factory.dollar(15));
  });

  test("mixedAdditionのテスト", () => {
    const fiveBucks: Expression = factory.dollar(5);
    const tenFranc: Expression = factory.franc(10);
    const bank = new Bank();
    bank.addRate("CHF", "USD", 2);
    const result = bank.reduce(fiveBucks.plus(tenFranc), "USD");
    expect(result).toEqual(factory.dollar(10));
  });

  test("simpleAdditionのテスト", () => {
    const five = factory.dollar(5);
    const sum: Expression = five.plus(five);
    const bank = new Bank();
    const reduced = bank.reduce(sum, "USD");
    expect(reduced).toEqual(factory.dollar(10));
  });

  test("plusがSumを返すテスト", () => {
    const five = factory.dollar(5);
    const result = five.plus(five);
    const sum = result as Sum;

    expect(sum.augend).toEqual(five);
    expect(sum.addend).toEqual(five);
  });

  test("reduceがSumを返すテスト", () => {
    const sum = new Sum(factory.dollar(3), factory.dollar(4));
    const bank = new Bank();
    const result = bank.reduce(sum, "USD");
    expect(result).toEqual(factory.dollar(7));
  });

  test("reduce.Moneyのテスト", () => {
    const bank = new Bank();
    const result = bank.reduce(factory.dollar(1), "USD");
    expect(result).toEqual(factory.dollar(1));
  });

  test("異なるcurrencyでのreduce.Moneyのテスト", () => {
    const bank = new Bank();
    bank.addRate("CHF", "USD", 2);
    const result = bank.reduce(factory.franc(2), "USD");
    expect(result).toEqual(factory.dollar(1));
  });

  test("multiplicationのテスト", () => {
    const five: Money = factory.dollar(5);
    expect(five.times(2)).toEqual(factory.dollar(10));
    expect(five.times(3)).toEqual(factory.dollar(15));
  });

  test("equalityのテスト", () => {
    expect(factory.dollar(5)).toEqual(factory.dollar(5));
    expect(factory.dollar(5)).not.toEqual(factory.dollar(6));
    expect(factory.franc(5)).not.toEqual(factory.dollar(5));
  });

  test("currencyのテスト", () => {
    expect("USD").toBe(factory.dollar(1).currency);
    expect("CHF").toBe(factory.franc(1).currency);
  });
});
