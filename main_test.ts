import { assertEquals } from "assert";

Deno.test("Moneyのテスト", async (t) => {
  await t.step("multiplicationのテスト", () => {
    const five = new Dollar(5);
    five.times(2);
    assertEquals(five.amout, 10);
  });
});
