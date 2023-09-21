import { assert, assertEquals, assertFalse } from "assert";
import { Dollar } from "./Dollar.ts";

Deno.test("Moneyのテスト", async (t) => {
  await t.step("multiplicationのテスト", () => {
    const five = new Dollar(5);
    assertEquals(five.times(2), new Dollar(10));
    assertEquals(five.times(3), new Dollar(15));
  });

  await t.step("equalityのテスト", () => {
    assert(new Dollar(5).equals(new Dollar(5)));
    assertFalse(new Dollar(5).equals(new Dollar(6)));
  });
});
