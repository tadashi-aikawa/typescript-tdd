import { assert, assertEquals, assertFalse } from "assert";
import { Money } from "./Money.ts";
import * as factory from "./money-factory.ts";

Deno.test("Moneyのテスト", async (t) => {
  await t.step("multiplicationのテスト", () => {
    const five: Money = factory.dollar(5);
    assertEquals(five.times(2), factory.dollar(10));
    assertEquals(five.times(3), factory.dollar(15));
  });

  await t.step("フランのmultiplicationのテスト", () => {
    const five = factory.franc(5);
    assertEquals(five.times(2), factory.franc(10));
    assertEquals(five.times(3), factory.franc(15));
  });

  await t.step("equalityのテスト", () => {
    assert(factory.dollar(5).equals(factory.dollar(5)));
    assertFalse(factory.dollar(5).equals(factory.dollar(6)));
    assert(factory.franc(5).equals(factory.franc(5)));
    assertFalse(factory.franc(5).equals(factory.franc(6)));
    assertFalse(factory.franc(5).equals(factory.dollar(5)));
  });
});
