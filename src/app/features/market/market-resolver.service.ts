import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { Market } from './state/market.model';
import { MarketsService } from './state/markets.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MarketResolverService implements Resolve<Market> {
  constructor(private marketsService: MarketsService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Market> | Promise<Market> | Market {
    return this.marketsService.get(route.paramMap.get('id'), {
      skipWrite: true,
    });
  }
}
