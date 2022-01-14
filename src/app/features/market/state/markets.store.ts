import { Injectable } from '@angular/core';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { Market } from './market.model';

export interface MarketsState extends EntityState<Market> {}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'markets' })
export class MarketsStore extends EntityStore<MarketsState> {

  constructor() {
    super();
  }

}
