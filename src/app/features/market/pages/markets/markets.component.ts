import { Component, OnInit } from '@angular/core';
import { MarketsService } from '../../state/markets.service';
import { MarketsQuery } from '../../state/markets.query';
import { FormBuilder, FormGroup } from '@angular/forms';
import {
  debounce,
  debounceTime,
  filter,
  startWith,
  switchMap,
  tap,
} from 'rxjs';
import { AppPagedResponse, Market } from '../../state/market.model';
import { PageEvent } from '@angular/material/paginator';
import { HotToastService } from '@ngneat/hot-toast';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmationDialogComponent } from '../../../../layout/confirmation-dialog/confirmation-dialog.component';
import { RequestQueryBuilder } from '@nestjsx/crud-request';
import { environment } from '../../../../../environments/environment';
import { MarketServiceService } from '../../state/market-service.service';
import { Sort } from '@angular/material/sort/sort';
import {
  filterMethod,
  filterStore,
  NgEntityServiceLoader,
  NgEntityServiceNotifier,
} from '@datorama/akita-ng-entity-service';
import { ActivatedRoute, Router } from '@angular/router';
import { Actions } from '@ngneat/effects-ng';
import { deleteMarket } from '../../state/market.actions';

const DEFAULT_PARAMS_VALUE = {
  page: 1,
  limit: 10,
  sort: 'id,DESC',
  name: '',
  symbol: '',
  country: '',
};

@Component({
  selector: 'app-markets',
  templateUrl: './markets.component.html',
  styleUrls: ['./markets.component.scss'],
})
export class MarketsComponent implements OnInit {
  markets$ = this.marketsQuery.selectAll();
  filters: FormGroup | undefined;
  total: number = 0;
  pageCount: number = 0;
  isLoading$ = this.loaderService.loadersFor('markets').get$;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private marketsService: MarketsService,
    private actions: Actions,
    private toastService: HotToastService,
    private dialog: MatDialog,
    private fb: FormBuilder,
    private loaderService: NgEntityServiceLoader,
    private marketsQuery: MarketsQuery,
    private notifier: NgEntityServiceNotifier
  ) {}

  ngOnInit(): void {
    this.listenToDeleteAction();
    this.initFiltersForm();
  }

  private initFiltersForm() {
    const queryParams = this.route.snapshot.queryParams;
    const initialParams = { ...DEFAULT_PARAMS_VALUE, ...queryParams };
    this.filters = this.fb.group(initialParams);
    this.filters.valueChanges
      .pipe(
        startWith(initialParams),
        debounceTime(1000),
        switchMap((filters) => this.loadMarkets())
      )
      .subscribe();
  }

  paginate({ pageIndex, pageSize }: PageEvent) {
    this.filters?.patchValue({
      page: pageIndex + 1,
      limit: pageSize,
    });
  }

  deleteMarket(market: Market) {
    this.dialog
      .open(ConfirmationDialogComponent, {
        data: {
          message: `Are you sure you wan to delete the market: ${market.name}?`,
        },
      })
      .afterClosed()
      .subscribe((result) => {
        if (result) {
          this.actions.dispatch(deleteMarket({ marketId: market.id }));
        }
      });
  }

  clearFilters() {
    this.filters.reset(DEFAULT_PARAMS_VALUE);
  }

  sort({ direction, active }: Sort) {
    this.filters.patchValue({
      sort: direction
        ? `${active},${direction.toUpperCase()}`
        : DEFAULT_PARAMS_VALUE.sort,
    });
  }

  private getQueryStrings(filters) {
    return RequestQueryBuilder.create()
      .search({
        symbol: {
          $contL: filters.symbol,
        },
        name: {
          $contL: filters.name,
        },
        country: {
          $contL: filters.country,
        },
      })
      .query(false);
  }

  private setURLQueryParams(filters) {
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: filters,
      queryParamsHandling: 'merge',
    });
  }

  private loadMarkets() {
    const { page, limit, sort, ...stringFilters } = this.filters.value;
    let queryString = this.getQueryStrings(this.filters.value);
    this.setURLQueryParams(this.filters.value);
    return this.marketsService.get({
      url: `${environment.baseUrl}/markets?${queryString}`,
      params: {
        page,
        limit,
        sort,
      },
      mapResponseFn: (res: AppPagedResponse<Market>) => {
        this.total = res.total;
        this.pageCount = res.pageCount;
        return res.data;
      },
    });
  }

  private listenToDeleteAction() {
    this.notifier.action$
      .pipe(
        filterStore('markets'),
        filterMethod('DELETE'),
        switchMap((filters) => this.loadMarkets())
      )
      .subscribe();
  }
}
