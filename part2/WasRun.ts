export class TestCase {}

export class WasRun extends TestCase {
  constructor(public name: string, public wasRun?: number) {
    super();
  }

  run() {
    ((this as any)[this.name] as CallableFunction)();
  }
  testMethod() {
    this.wasRun = 1;
  }
}
