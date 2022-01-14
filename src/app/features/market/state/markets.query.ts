import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { MarketsStore, MarketsState } from './markets.store';

@Injectable({ providedIn: 'root' })
export class MarketsQuery extends QueryEntity<MarketsState> {
  constructor(protected override store: MarketsStore) {
    super(store);
  }
}
