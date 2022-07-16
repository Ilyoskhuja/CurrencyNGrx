import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Currency,SearchResponceModel } from '../../models';
@Component({
    moduleId:module.id,
  selector: 'coin-list',
  templateUrl: './coin-list.component.html',
})
export class CoinListComponent  {
  @Input() items: Currency | SearchResponceModel []=[];
  @Output() itemTap:EventEmitter<any>=new EventEmitter();
  @Output() onLoadMoreItems:EventEmitter<any>=new EventEmitter();
 }
