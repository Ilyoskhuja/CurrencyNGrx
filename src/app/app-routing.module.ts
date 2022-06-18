import { NgModule } from '@angular/core'
import { Routes } from '@angular/router'
import { NativeScriptRouterModule } from '@nativescript/angular'

import { ItemsComponent } from './currency/component/items.component'
import { ItemDetailComponent } from './currency/component/item-detail.component'

const routes: Routes = [
  {path:'',redirectTo:'/currency-list',pathMatch:'full'},
  {path:'currency-list',loadChildren: () => import('./currency/currency.module')}
  // { path: '', redirectTo: '/items', pathMatch: 'full' },
  // { path: 'items', component: ItemsComponent },
  // { path: 'item/:id', component: ItemDetailComponent },
]

@NgModule({
  imports: [NativeScriptRouterModule.forRoot(routes)],
  exports: [NativeScriptRouterModule],
})
export class AppRoutingModule {}
