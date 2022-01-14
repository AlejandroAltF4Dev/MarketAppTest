import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HotToastService } from '@ngneat/hot-toast';
import { MarketsService } from '../../state/markets.service';
import { tap } from 'rxjs';
import { Market } from '../../state/market.model';
import { Actions } from '@ngneat/effects-ng';
import { addMarket, updateMarket } from '../../state/market.actions';

@Component({
  selector: 'app-markets-edit',
  templateUrl: './markets-edit.component.html',
  styleUrls: ['./markets-edit.component.scss'],
})
export class MarketsEditComponent implements OnInit {
  market: Market;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private toastService: HotToastService,
    private actions: Actions
  ) {
    const { market } = this.route.snapshot.data;
    this.market = market;
  }

  ngOnInit(): void {}

  updateMarket(market: Market) {
    this.actions.dispatch(updateMarket({ market }));
  }
}
