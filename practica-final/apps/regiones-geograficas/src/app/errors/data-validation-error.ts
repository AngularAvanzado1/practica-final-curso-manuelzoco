export class DataValidationError extends Error {
  readonly name = 'DataValidationError';
  readonly message: string;
  readonly error: any | null;
  readonly type: DataValidationError;

  constructor(message: string) {
    super(message);
    this.message = message;
    Object.setPrototypeOf(this, DataValidationError.prototype);
  }
}
