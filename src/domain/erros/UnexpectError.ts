export class UnexpectError extends Error {
  constructor() {
    super('UnexpectError');
    this.name = 'UnexpectError';
  }
}