import { createEffect } from '@ngneat/effects';
import { switchMap, tap } from 'rxjs';
import { Injectable } from '@angular/core';
import { MarketsService } from './state/markets.service';
import {
  addMarket,
  deleteMarket,
  updateMarket,
} from './state/market.actions';
import { HotToastService } from '@ngneat/hot-toast';
import { Router } from '@angular/router';
import {ofType} from "@ngneat/effects";

@Injectable({ providedIn: 'root' })
export class MarketEffects {
  constructor(
    private marketsService: MarketsService,
    private toastService: HotToastService,
    private router: Router
  ) {}

  createMarket$ = createEffect((actions) =>
    actions.pipe(
      ofType(addMarket),
      switchMap(({ market }) =>
        this.marketsService.add(market, { skipWrite: true }).pipe(
          this.toastService.observe({
            loading: 'Creating market',
            error: 'Error creating market',
            success: 'Market successfully created',
          }),
          tap(() => this.router.navigateByUrl('/markets'))
        )
      )
    )
  );

  updateMarket$ = createEffect((actions) =>
    actions.pipe(
      ofType(updateMarket),
      switchMap(({ market }) =>
        this.marketsService.update(market.id, market, { skipWrite: true }).pipe(
          this.toastService.observe({
            loading: 'Updating market',
            error: 'Error updating market',
            success: 'Market successfully updated',
          }),
          tap(() => this.router.navigateByUrl('/markets'))
        )
      )
    )
  );

  deleteMarket$ = createEffect((actions) =>
    actions.pipe(
      ofType(deleteMarket),
      switchMap(({ marketId }) =>
        this.marketsService.delete(marketId).pipe(
          this.toastService.observe({
            error: 'Market delete failed',
            loading: 'Deleting market',
            success: 'Market successfully deleted',
          })
        )
      )
    )
  );
}
