import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HotToastService } from '@ngneat/hot-toast';
import {Actions} from "@ngneat/effects-ng";
import {addMarket} from "../../state/market.actions";

@Component({
  selector: 'app-markets-create',
  templateUrl: './markets-create.component.html',
  styleUrls: ['./markets-create.component.scss'],
})
export class MarketsCreateComponent implements OnInit {
  constructor(
    private router: Router,
    private toastService: HotToastService,
    private actions: Actions
  ) {}

  ngOnInit(): void {}

  createMarket(market: any) {
    delete market.id;
    this.actions.dispatch(addMarket({market}))
  }
}
