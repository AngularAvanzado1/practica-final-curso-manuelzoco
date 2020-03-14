import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot
} from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { HttpErrorResponse } from '@angular/common/http';

import { ResolverErrorEmitter } from '../services/resolver-error-emitter.service';
import { DataValidationError } from '../errors/data-validation-error';
import { FatalErrorType } from '../errors/fatal-error-type';
import { FatalError } from '../errors/fatal-error';

export abstract class DataResolverAndValidator<T> implements Resolve<T> {
  protected abstract validate(value: T): void;
  protected abstract getDataForRoute(
    route?: ActivatedRouteSnapshot,
    state?: RouterStateSnapshot
  ): Observable<T>;

  protected abstract onError(
    error: any,
    route?: ActivatedRouteSnapshot,
    state?: RouterStateSnapshot
  ): void;

  protected constructor(protected _errorHandler: ResolverErrorEmitter) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<T> {
    return this.getDataForRoute(route, state).pipe(
      tap(this.validate),
      catchError(error => {
        let handledError = null;

        if (error instanceof DataValidationError) {
          handledError = new FatalError({
            type: FatalErrorType.VALIDATION,
            message: error.message
          });
        } else if (error instanceof HttpErrorResponse) {
          handledError = new FatalError({
            type: FatalErrorType.NAVIGATION,
            message: error.message,
            error: error
          });
        } else {
          handledError = error;
        }

        this.onError(handledError, route, state);
        this._errorHandler.emit(handledError);
        return throwError(handledError);
      })
    );
  }
}
