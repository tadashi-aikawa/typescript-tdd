const test = WasRun("testMethod");
console.log(test.WasRun); // undefinedが期待
test.testMethod();
console.log(test.WasRun); // 1が期待
