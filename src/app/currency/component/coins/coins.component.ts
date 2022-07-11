import { Component, OnInit } from '@angular/core'
import { ActivityIndicator, EventData, ItemEventData, SearchBar } from '@nativescript/core';
import { Currency } from '../../models/currency.model';
import {Store} from '@ngrx/store';
import { getCurrencies } from '../../reducer/currency.reducer';
import { search } from '../../actions';
import { getAllCurrencies } from '../../reducer';
import { Observable } from 'rxjs';



@Component({
  selector: 'ns-coins',
  templateUrl: './coins.component.html',
})
export class CoinsComponent implements OnInit {
  currencies$:Observable<Currency[]>;
  isBusy: boolean = true;
  isActivityVisible=true;
  pageNumber=1;
  searchTerm="";
  constructor(private store: Store) {
   this.currencies$= store.select(getAllCurrencies);
    console.log("***********currencies$***************",this.currencies$);
    
  }

  ngOnInit(): void {
  }
  
 
  onLoadMoreCoins(event:ItemEventData){
    this.pageNumber++;
  }
  coinTap(coin:Currency){
   console.log("coin:",coin);
  }
  onSearchLayoutBarLoaded(event){
    if(event.object.android){
      event.object.android.clearFocus();
    }
   
  }
  onSearchBarLoaded(event){
    if(event.object.android){
      event.object.android.clearFocus();
    }
   
  }
  searchCoin(args:EventData){
    const sb = args.object as SearchBar
    this.onSearchBarLoaded(args);
    this.clearCoins();
    this.searchTerm=sb.text;
    this.onSearchBarLoaded(args);
  }
  onSearchBarClear(args:EventData){
   this.searchTerm="";
   this.clearCoins();
   this.onSearchBarLoaded(args)
  }
  clearCoins(){
  this.pageNumber=1;
  //clear
  }
  onBusyChanged(args: EventData) {
      let indicator: ActivityIndicator = <ActivityIndicator>args.object;
      console.log("indicator.busy changed to: " + indicator.busy);
  }
  onTextChanged(args) {
    const searchBar = args.object as SearchBar
    this.store.dispatch(search({searchTerm:searchBar.text}));
    console.log(`Input changed! New value: ${searchBar.text}`)
    
  }
}
