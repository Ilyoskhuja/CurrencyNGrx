import { Component, OnInit } from '@angular/core'
import { ActivityIndicator, EventData } from '@nativescript/core';
import { map, Observable } from 'rxjs';
import { Currency } from '../models/currency.model';
import { CurrencyService } from '../services/currency.service';

import { Item } from './item'
import { ItemService } from './item.service'

@Component({
  selector: 'ns-items',
  templateUrl: './items.component.html',
})
export class ItemsComponent implements OnInit {
  currencies:Currency[];
  isBusy: boolean = true;
  isActivityVisible=true;
  constructor(private itemService: ItemService,private currencyService: CurrencyService) {}

  ngOnInit(): void {
    
    this.currencyService.getCurrencyData().subscribe(res=>{
      console.log("res:",res)
      this.currencies=res;
      this.isActivityVisible=false
    })
  
  }
 

  onBusyChanged(args: EventData) {
      let indicator: ActivityIndicator = <ActivityIndicator>args.object;
      console.log("indicator.busy changed to: " + indicator.busy);
  }
}
