import { assertEquals } from "assert";
import { Dollar } from "./Dollar.ts";

Deno.test("Moneyのテスト", async (t) => {
  await t.step("multiplicationのテスト", () => {
    const five = new Dollar(5);
    let product = five.times(2);
    assertEquals(product.amount, 10);
    product = five.times(3);
    assertEquals(product.amount, 15);
  });
});
