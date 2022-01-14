import { Component, OnInit } from '@angular/core';
import { Market } from '../../state/market.model';
import { ActivatedRoute, Router } from '@angular/router';
import { HotToastService } from '@ngneat/hot-toast';
import { MarketsService } from '../../state/markets.service';
import { tap } from 'rxjs';

@Component({
  selector: 'app-market-details',
  templateUrl: './market-details.component.html',
  styleUrls: ['./market-details.component.scss'],
})
export class MarketDetailsComponent implements OnInit {
  market: Market;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private toastService: HotToastService,
    private marketsService: MarketsService
  ) {
    const { market } = this.route.snapshot.data;
    this.market = market;
  }

  ngOnInit(): void {}
}
