import { Component, OnInit } from '@angular/core'
import { ActivityIndicator, EventData, ItemEventData, SearchBar } from '@nativescript/core';
import { Currency } from '../../models/currency.model';
import {Store} from '@ngrx/store';
import { CoinsActions } from '../../actions';
import { Observable } from 'rxjs';
import { getAllCoins } from '../../reducer/state';
import { debounce } from 'throttle-debounce';

@Component({
  selector: 'ns-coins',
  templateUrl: './coins.component.html',
})
export class CoinsComponent implements OnInit {
  currencies$:Observable<any[]>;
  isBusy: boolean = true;
  isActivityVisible=true;
  pageNumber=1;
  searchTerm="";
  constructor(private store: Store) {
    
   this.currencies$= store.select(getAllCoins);
     
    
  }

  ngOnInit(): void {

  }
  
 
  onLoadMoreCoins(event:ItemEventData){
    this.pageNumber++;
  }
  coinTap(coin:Currency){
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
   
    this.store.dispatch(CoinsActions.CoinsLoaded())
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
  
  }
  textSearchDebounce = debounce(300, (searchBarArgs) => {
    const searchBar = <SearchBar>searchBarArgs.object;
    const searchValue = searchBar.text.toLowerCase();
  
    if (searchValue == '') {
      return [];
    } else {
      this.store.dispatch(CoinsActions.SearchAction({searchTerm:searchBar.text}))
    }
  });
  onTextChanged(args) {
    this.textSearchDebounce(args);
  }
}
