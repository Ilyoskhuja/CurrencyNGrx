import { NgModule } from '@angular/core'
import { Routes } from '@angular/router'
import { NativeScriptRouterModule } from '@nativescript/angular'


const routes: Routes = [
  {path:'',redirectTo:'/currency-list',pathMatch:'full'},
  {path:'currency-list',loadChildren: () => import('./currency/currency.module').then(p=>p.CurrencyModule)}
]

@NgModule({
  imports: [NativeScriptRouterModule.forRoot(routes)],
  exports: [NativeScriptRouterModule],
})
export class AppRoutingModule {}
