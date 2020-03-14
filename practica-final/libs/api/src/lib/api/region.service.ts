import { Inject, Injectable, Optional } from '@angular/core';
import {
  HttpClient,
  HttpHeaders,
  HttpParams,
  HttpResponse,
  HttpEvent,
  HttpParameterCodec
} from '@angular/common/http';
import { CustomHttpParameterCodec } from '../encoder';
import { Observable } from 'rxjs';

import { PaginatedRegions } from '../model/paginatedRegions';
import { PaginatedRegionsView } from '../model/paginated-regions-view';

import { BASE_PATH } from '../variables';
import { Configuration } from '../configuration';

@Injectable({
  providedIn: 'root'
})
export class RegionService {
  protected basePath = 'http://localhost';
  public defaultHeaders = new HttpHeaders();
  public configuration = new Configuration();
  public encoder: HttpParameterCodec;

  constructor(
    protected httpClient: HttpClient,
    @Optional() @Inject(BASE_PATH) basePath: string,
    @Optional() configuration: Configuration
  ) {
    if (configuration) {
      this.configuration = configuration;
    }
    if (typeof this.configuration.basePath !== 'string') {
      if (typeof basePath !== 'string') {
        basePath = this.basePath;
      }
      this.configuration.basePath = basePath;
    }
    this.encoder = this.configuration.encoder || new CustomHttpParameterCodec();
  }

  public getPaginatedRegions(
    page?: number,
    observe?: 'body',
    reportProgress?: boolean
  ): Observable<PaginatedRegions>;
  public getPaginatedRegions(
    page?: number,
    observe?: 'response',
    reportProgress?: boolean
  ): Observable<HttpResponse<PaginatedRegions>>;
  public getPaginatedRegions(
    page?: number,
    observe?: 'events',
    reportProgress?: boolean
  ): Observable<HttpEvent<PaginatedRegions>>;
  public getPaginatedRegions(
    page?: number,
    observe: any = 'body',
    reportProgress: boolean = false
  ): Observable<any> {
    let queryParameters = new HttpParams({ encoder: this.encoder });
    if (page !== undefined && page !== null) {
      queryParameters = queryParameters.set('page', <any>page);
    }

    let headers = this.defaultHeaders;

    // to determine the Accept header
    const httpHeaderAccepts: string[] = ['application/json'];
    const httpHeaderAcceptSelected:
      | string
      | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected !== undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected);
    }

    return this.httpClient.get<PaginatedRegions>(
      `http://api.worldbank.org/v2/region/?format=json`,
      {
        params: queryParameters,
        withCredentials: this.configuration.withCredentials,
        headers: headers,
        observe: observe,
        reportProgress: reportProgress
      }
    );
  }

  public getRegionsDetail(
    code: string,
    observe?: 'body',
    reportProgress?: boolean
  ): Observable<PaginatedRegionsView>;
  public getRegionsDetail(
    code: string,
    observe?: 'response',
    reportProgress?: boolean
  ): Observable<HttpResponse<PaginatedRegionsView>>;
  public getRegionsDetail(
    code: string,
    observe?: 'events',
    reportProgress?: boolean
  ): Observable<HttpEvent<PaginatedRegionsView>>;
  public getRegionsDetail(
    code: string,
    observe: any = 'body',
    reportProgress: boolean = false
  ): Observable<any> {
    let headers = this.defaultHeaders;

    // to determine the Accept header
    const httpHeaderAccepts: string[] = ['application/json'];
    const httpHeaderAcceptSelected:
      | string
      | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected !== undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected);
    }

    return this.httpClient.get<PaginatedRegionsView>(
      `http://api.worldbank.org/v2/region/${code}/country?per_page=100000&format=json`,
      {
        withCredentials: this.configuration.withCredentials,
        headers: headers,
        observe: observe,
        reportProgress: reportProgress
      }
    );
  }

  public getRegionDetail(
    code: string,
    observe?: 'body',
    reportProgress?: boolean
  ): Observable<PaginatedRegionsView>;
  public getRegionDetail(
    code: string,
    observe?: 'response',
    reportProgress?: boolean
  ): Observable<HttpResponse<PaginatedRegionsView>>;
  public getRegionDetail(
    code: string,
    observe?: 'events',
    reportProgress?: boolean
  ): Observable<HttpEvent<PaginatedRegionsView>>;
  public getRegionDetail(
    code: string,
    observe: any = 'body',
    reportProgress: boolean = false
  ): Observable<any> {
    let headers = this.defaultHeaders;

    // to determine the Accept header
    const httpHeaderAccepts: string[] = ['application/json'];
    const httpHeaderAcceptSelected:
      | string
      | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected !== undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected);
    }

    return this.httpClient.get<PaginatedRegionsView>(
      `http://api.worldbank.org/V2/country/${code}?format=json`,
      {
        withCredentials: this.configuration.withCredentials,
        headers: headers,
        observe: observe,
        reportProgress: reportProgress
      }
    );
  }
}
