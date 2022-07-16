import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import {COIN_COMPONENTS} from './component'

import { CurrencyRoutingModule } from './currency.routing';
import { NativeScriptCommonModule } from '@nativescript/angular';
import { CurrencyEffects } from './effects';
import { SharedStateCoinsModule } from './reducer/state';

@NgModule({
  imports: [
    NativeScriptCommonModule,
    CurrencyRoutingModule,
    EffectsModule.forFeature([CurrencyEffects]),
    SharedStateCoinsModule

  ],
  declarations: [...COIN_COMPONENTS],
  schemas: [NO_ERRORS_SCHEMA],
})
export class CurrencyModule {}