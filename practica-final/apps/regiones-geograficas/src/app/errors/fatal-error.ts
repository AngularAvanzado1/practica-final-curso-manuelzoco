import { FatalErrorType } from './fatal-error-type';

export class FatalError extends Error {
  readonly name = 'FatalError';
  readonly message: string;
  readonly error: any | null;
  readonly type: FatalErrorType;

  constructor(init: { error?: any; message?: string; type?: FatalErrorType }) {
    super(init && init.message);
    this.type = init && init.type ? init.type : FatalErrorType.UNKNOWN;
    this.message = init && init.message ? init.message : 'Unknown error';
    this.error = init && init.error;
    Object.setPrototypeOf(this, FatalError.prototype);
  }
}
