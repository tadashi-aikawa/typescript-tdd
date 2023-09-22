import { assert, assertEquals, assertFalse } from "assert";
import { Money } from "./Money.ts";

Deno.test("Moneyのテスト", async (t) => {
  await t.step("multiplicationのテスト", () => {
    const five: Money = Money.dollar(5);
    assertEquals(five.times(2), Money.dollar(10));
    assertEquals(five.times(3), Money.dollar(15));
  });

  await t.step("フランのmultiplicationのテスト", () => {
    const five = Money.franc(5);
    assertEquals(five.times(2), Money.franc(10));
    assertEquals(five.times(3), Money.franc(15));
  });

  await t.step("equalityのテスト", () => {
    assert(Money.dollar(5).equals(Money.dollar(5)));
    assertFalse(Money.dollar(5).equals(Money.dollar(6)));
    assert(Money.franc(5).equals(Money.franc(5)));
    assertFalse(Money.franc(5).equals(Money.franc(6)));
    assertFalse(Money.franc(5).equals(Money.dollar(5)));
  });
});
