import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'
import { ActivityIndicator, EventData, SearchBar } from '@nativescript/core';
import { Currency } from '../../models/currency.model';
import { CurrencyService } from '../../services/currency.service';



@Component({
    moduleId:module.id,
  selector: 'coin-list',
  templateUrl: './coin-list.component.html',
})
export class CoinListComponent implements OnInit {
  @Input() items:Currency[]=[];
  
  @Output() itemTap:EventEmitter<any>=new EventEmitter();
  @Output() onLoadMoreItems:EventEmitter<any>=new EventEmitter();

  constructor(private currencyService: CurrencyService) {}

  ngOnInit(): void {
  console.log("************CoinsListsComponent items*********:",this.items);
  
  
  }
 

 }
