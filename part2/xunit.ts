export class TestCase {
  constructor(public name: string) {}

  run() {
    ((this as any)[this.name] as CallableFunction)();
  }
}

export class WasRun extends TestCase {
  constructor(name: string, public wasRun?: number) {
    super(name);
  }

  testMethod() {
    this.wasRun = 1;
  }
}

const test = new WasRun("testMethod");
console.log(test.wasRun);
test.run();
console.log(test.wasRun);
