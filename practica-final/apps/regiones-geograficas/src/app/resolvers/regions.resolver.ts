import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { DataResolverAndValidator } from './data-resolver-validator';
import { ResolverErrorEmitter } from '../services/resolver-error-emitter.service';
import { RegionService, Region } from '@pf/api';

@Injectable({ providedIn: 'root' })
export class RegionsResolver extends DataResolverAndValidator<Region[]> {
  constructor(
    private _service: RegionService,
    _errorEmitter: ResolverErrorEmitter
  ) {
    super(_errorEmitter);
  }

  protected getDataForRoute(): Observable<Region[]> {
    return this._service.getPaginatedRegions().pipe(
      map(response => {
        return response[1];
      })
    );
  }

  protected onError(error: any): void {}

  // eslint-disable-next-line no-empty-function,@typescript-eslint/no-empty-function
  protected validate(value: Region[]): void {}
}
