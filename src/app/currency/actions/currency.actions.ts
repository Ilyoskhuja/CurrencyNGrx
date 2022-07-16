import {  createAction, props } from "@ngrx/store";
import { Currency } from "../models/currency.model";

export const SEARCH = "[Coin] Search";
export const LOAD_CURRENCY = "[Currency] Load Currency";
export const LOAD_CURRENCY_FAIL = "[Currency] Load Currency Failure";
export const LOAD_CURRENCY_SUCCESS = "[Currency] Load Currency Success";


export const CoinsLoaded=createAction(
  LOAD_CURRENCY
);
// export const LoadCurrencyFail=createAction(
//   LOAD_CURRENCY_FAIL,
//   props<{coin:Currency}>()
// );
export const LoadCurrencySuccess=createAction(
  LOAD_CURRENCY_SUCCESS,
  props<{coins:any[]}>()
);
export const SearchAction = createAction(
  SEARCH,
  props<{ searchTerm: string }>()
);

