import { Injectable } from '@angular/core';
import { Observable, ReplaySubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ResolverErrorEmitter {
  readonly $errors: Observable<Error>;

  private _errorsSubject = new ReplaySubject<Error>(1);

  constructor() {
    this.$errors = this._errorsSubject.asObservable();
  }

  emit(error: Error) {
    this._errorsSubject.next(error);
  }
}
