import { Injectable } from '@angular/core';
import { RequestQueryBuilder } from '@nestjsx/crud-request';
import { environment } from '../../../../environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { CustomUrlSerializer } from '../../../layout/urlserializer';

@Injectable({
  providedIn: 'root',
})
export class MarketServiceService {
  constructor(private httpClient: HttpClient) {}

  getWithoutEncode(filters) {
    const { page, limit, sort, ...stringFilters } = filters;
    let queryString = RequestQueryBuilder.create()
      .search({
        name: filters.name || 'asd',
      })

      .query(false);
    return this.httpClient.get(
      `${environment.baseUrl}/markets`,
      {
        params: new HttpParams({
          encoder: new CustomUrlSerializer(),
          fromString: queryString,
          /*fromObject: {
            page,
            limit,
            sort,
          },*/
        }),
      }
    );
  }
}
