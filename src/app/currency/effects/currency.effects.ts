import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Action } from "@ngrx/store";
import { Observable } from "rxjs";
import { switchMap, map, catchError,mergeMap } from "rxjs/operators";

import * as currencyActions from "../actions";
import { CurrencyService } from "../services/currency.service";

@Injectable()
export class CurrencyEffects {
  constructor(
    private actions$: Actions,
    private currencyService: CurrencyService
  ) {}

  loadCurrencies$ = createEffect(() =>{
    console.log("----*****----Effects----*****------")
    return this.actions$.pipe(
      ofType(currencyActions.LOAD_CURRENCY),
      mergeMap(() =>{
        return this.currencyService.getCurrencyData()
        .pipe(map((currencies) => currencyActions.LoadCurrencySuccess(currencies)))
      })
    )
  });
  searchCurrencies$ = createEffect(() =>
    this.actions$.pipe(
      ofType(currencyActions.search),
      switchMap(action => this.currencyService.searchCoin(action.searchTerm)),
      map((currencies) => new currencyActions.LoadCurrencySuccess(currencies))
    )
  );
}
