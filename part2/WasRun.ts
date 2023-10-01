export class WasRun {
  constructor(public name: string, public wasRun?: number) {}
  testMethod() {
    this.wasRun = 1;
  }
}
