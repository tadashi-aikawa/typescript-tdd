import { assertEquals } from "assert";
import { sum } from "./main.ts";

Deno.test("sumのテスト", () => {
  assertEquals(sum(2, 3), 50);
});
