import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { DataResolverAndValidator } from './data-resolver-validator';
import { ResolverErrorEmitter } from '../services/resolver-error-emitter.service';

import { RegionService, RegionView } from '@pf/api';

@Injectable({ providedIn: 'root' })
export class RegionDetailResolver extends DataResolverAndValidator<RegionView[]> {
  constructor(
    private _service: RegionService,
    _errorEmitter: ResolverErrorEmitter
  ) {
    super(_errorEmitter);
  }

  protected getDataForRoute(route?: ActivatedRouteSnapshot): Observable<RegionView[]> {
    const { code } = route.params;
    return this._service.getRegionDetail(code).pipe(
      map(response => {
        return response[1];
      })
    );
  }

  protected onError(error: any): void {}

  // eslint-disable-next-line no-empty-function,@typescript-eslint/no-empty-function
  protected validate(value: RegionView[]): void {}
}
