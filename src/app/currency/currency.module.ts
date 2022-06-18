import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

// import { reducers } from './reducers';
// import { CurrencyEffects } from './effects';

import { CurrencyRoutingModule } from './currency.routing';
import { ItemsComponent } from './component/items.component';
import { ItemDetailComponent } from './component/item-detail.component';
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
  declarations: [ItemsComponent, ItemDetailComponent],
  schemas: [NO_ERRORS_SCHEMA],
})
export class CurrencyModule {}