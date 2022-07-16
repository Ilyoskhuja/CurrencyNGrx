import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { switchMap, map,mergeMap } from "rxjs/operators";
import { CoinsActions } from '../actions';
import { CurrencyService } from "../services/currency.service";

@Injectable()
export class CurrencyEffects {
  constructor(
    private actions$: Actions,
    private currencyService: CurrencyService
  ) {
  }

  loadCurrencies$ = createEffect(() =>
     this.actions$.pipe(
      ofType(CoinsActions.LOAD_CURRENCY),
      mergeMap(() =>{
        return this.currencyService.getCurrencyData()
        .pipe(map((data) => 
          CoinsActions.LoadCurrencySuccess({coins:data})),
        
        )
      })
    )
  );
  searchCoins$ = createEffect(() =>this.actions$.pipe(
      ofType(CoinsActions.SEARCH),
      switchMap((action:any) =>
       this.currencyService.searchCoin(action.searchTerm)
       .pipe(
        map((data) => CoinsActions.LoadCurrencySuccess({coins:data}))
        )
    )
      ))
}
