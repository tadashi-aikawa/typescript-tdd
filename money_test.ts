import { assertEquals } from "assert";
import { Dollar } from "./Dollar.ts";

Deno.test("Moneyのテスト", async (t) => {
  await t.step("multiplicationのテスト", () => {
    const five = new Dollar(5);
    five.times(2);
    assertEquals(five.amount, 10);
    five.times(3);
    assertEquals(five.amount, 15);
  });
});
