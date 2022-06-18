import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import { NativeScriptHttpClientModule } from '@nativescript/angular';
import { CurrencyService} from '../currency/services/currency.service';
@NgModule({
    imports: [NativeScriptHttpClientModule]
})
export class CoreModule { 
    static forRoot():ModuleWithProviders<CoreModule>{
       return {
           ngModule:CoreModule,
           providers:[CurrencyService]
       }
    }
    constructor(@Optional()
                @SkipSelf()
                parentModule:CoreModule){
        if(parentModule){
            throw new Error(`CoreModule is already loaded. It can only be imported inside of Appmodule`)
        }
    }
}
