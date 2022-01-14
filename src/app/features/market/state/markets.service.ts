import { Injectable } from '@angular/core';
import { NgEntityService } from '@datorama/akita-ng-entity-service';
import { MarketsStore, MarketsState } from './markets.store';

@Injectable({ providedIn: 'root' })
export class MarketsService extends NgEntityService<MarketsState> {
  constructor(protected override store: MarketsStore) {
    super(store);
  }
}
