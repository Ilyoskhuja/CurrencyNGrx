import { NgModule } from '@angular/core';
import {
    ActionReducerMap,
    createSelector,
    createFeatureSelector,
    StoreModule,
    MetaReducer,
  } from '@ngrx/store';
  
  import * as fromCurrency from './currency.reducer';
  
export const FEATURE_KEY = 'shared-coins';
  export interface State {
    coins: fromCurrency.State;
  }
  
  export const reducers: ActionReducerMap<State> = {
    coins: fromCurrency.reducer,
  };

  export const metaReducers: MetaReducer<State>[] = [];
  
  /**
 * Module
 **/
@NgModule({
  imports: [StoreModule.forFeature(FEATURE_KEY, reducers, { metaReducers })],
})
export class SharedStateCoinsModule {}

/**
 * Feature Selector
 **/
export const selectSharedCoinsState = createFeatureSelector<State>(FEATURE_KEY);

  
  export const coinState = createSelector(
    selectSharedCoinsState,
    (sharedCoinsState) => sharedCoinsState.coins,
  );
  
  export const getAllCoins = createSelector(
    coinState,
    fromCurrency.allCoins,
  );
  export const searchCurrencies = createSelector(
    coinState,
    fromCurrency.searchCurrencies,
  );