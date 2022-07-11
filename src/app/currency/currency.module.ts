import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import {COIN_COMPONENTS} from './component'

import { CurrencyRoutingModule } from './currency.routing';
import { NativeScriptCommonModule } from '@nativescript/angular';
import { CurrencyEffects } from './effects';
import { reducers } from './reducer';

@NgModule({
  imports: [
    NativeScriptCommonModule,
    CurrencyRoutingModule,
    StoreModule.forFeature('currency', reducers),
    EffectsModule.forFeature([CurrencyEffects]),
  ],
  declarations: [...COIN_COMPONENTS],
  schemas: [NO_ERRORS_SCHEMA],
})
export class CurrencyModule {}