import { actionsFactory, createAction, props } from '@ngneat/effects';

import {Market} from "./market.model";

export const marketActions = actionsFactory('market');

export const addMarket = marketActions.create('Add Market', props<{ market: Market }>());
export const updateMarket = marketActions.create('Update Market', props<{ market: Market }>());
export const deleteMarket = marketActions.create('Delete Market', props<{ marketId: number }>());
