
import { createReducer, on } from "@ngrx/store";
import { CoinsActions } from "../actions";
import { SearchResponceModel,Currency} from "../models";

export interface State {
  loading: boolean;
  data: Currency | SearchResponceModel [];
}

const initialState: State = {
  loading: false,
  data: [],
};

export const reducer = createReducer(
  initialState,
  on(CoinsActions.CoinsLoaded, (state, action) => {
    return {
      ...state
    };
  }),
  on(CoinsActions.SearchAction, (state, action) => {
    return {
      ...state,
      searchTerm: action.searchTerm,
    };
  }), 
  on(CoinsActions.LoadCurrencySuccess, (state, action) => {
    return {
      ...state,
      data: action.coins,
    };
  })
);

export const allCoins = (state: State) => state.data;
export const searchCurrencies = (state: State) => state.data;
export const getCurrenciesLoading = (state: State) => state.loading;
