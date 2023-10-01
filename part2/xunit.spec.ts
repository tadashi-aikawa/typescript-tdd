import { describe, expect, test } from "bun:test";
import { WasRun } from "./xunit";

describe("TestCaseTest", () => {
  test("testRunning", () => {
    const test = new WasRun("testMethod");
    expect(test.wasRun).toBeUndefined();
    test.run();
    expect(test.wasRun).toBe(1);
  });
});
