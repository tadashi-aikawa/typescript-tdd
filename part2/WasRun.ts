export class WasRun {
  constructor(public name: string, public wasRun?: number) {}
  run() {
    ((this as any)[this.name] as CallableFunction)();
  }
  testMethod() {
    this.wasRun = 1;
  }
}
