import { Currency } from '../models/currency.model';
import * as currencyActions from '../actions';

export interface State {
  loading: boolean;
  data: Currency[];
}

const initialState: State = {
  loading: false,
  data: [
    {
      id: "bitcoin",
      symbol: "btc",
      name: "Bitcoin",
      image:
        "https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579",
      current_price: 29766,
      market_cap: 567280807937,
      market_cap_rank: 1,
      fully_diluted_valuation: 625096061755,
      total_volume: 20483497929,
      high_24h: 30473,
      low_24h: 29400,
      price_change_24h: -682.8596565501139,
      price_change_percentage_24h: -2.24261,
      market_cap_change_24h: -12939885527.105347,
      market_cap_change_percentage_24h: -2.23017,
      circulating_supply: 19057706,
      total_supply: 21000000,
      max_supply: 21000000,
      ath: 69045,
      ath_change_percentage: -56.86035,
      ath_date: "2021-11-10T14:24:11.849Z",
      atl: 67.81,
      atl_change_percentage: 43825.83498,
      atl_date: "2013-07-06T00:00:00.000Z",
      roi: null,
      last_updated: "2022-06-04T08:53:13.816Z",
    },
  ],
};

export function reducer(
  state = initialState,
  action: currencyActions.Actions,
): State {
  switch (action.type) {
    case currencyActions.LOAD_CURRENCY: {
      return {
        loading: true,
        ...state,
      };
    }

    case currencyActions.LOAD_CURRENCY_SUCCESS: {
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    }
    case currencyActions.LOAD_CURRENCY_FAIL: {
      return {
        loading: false,
        ...state,
      };
    }
    default: {
      return state;
    }
  }
}

export const getCurrencies = (state: State) => state.data;
export const getCurrenciesLoading = (state: State) => state.loading;