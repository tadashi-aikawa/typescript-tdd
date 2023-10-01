export class TestCase {
  constructor(public name: string) {}
}

export class WasRun extends TestCase {
  constructor(name: string, public wasRun?: number) {
    super(name);
  }

  run() {
    ((this as any)[this.name] as CallableFunction)();
  }
  testMethod() {
    this.wasRun = 1;
  }
}
