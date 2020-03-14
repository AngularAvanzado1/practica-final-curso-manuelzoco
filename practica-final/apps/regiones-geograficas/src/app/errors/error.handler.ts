import { ErrorHandler, Injectable } from '@angular/core';
import { ResolverErrorEmitter } from '../services/resolver-error-emitter.service';
import { FatalError } from './fatal-error';

@Injectable({ providedIn: 'root' })
export class CustomErrorHandler implements ErrorHandler {
  constructor(
    private _handler: ResolverErrorEmitter
  ) {
    this._handler.$errors.subscribe(this.handleError.bind(this));
  }

  handleError(error: any): void {
    switch (true) {
      case error instanceof FatalError:
        console.error(error);
        break;
      default:
        console.error(error);
        break;
    }
    console.error(error);
  }
}
