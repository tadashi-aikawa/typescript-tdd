export class WasRun {
  constructor(public name: string, public wasRun?: number) {}
  run() {
    this.testMethod();
  }
  testMethod() {
    this.wasRun = 1;
  }
}
