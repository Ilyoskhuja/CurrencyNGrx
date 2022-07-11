import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { Currency } from '../../models/currency.model'

@Component({
  selector: 'ns-coin-details',
  templateUrl: './coin-detail.component.html',
})
export class CoinDetailComponent implements OnInit {
  item: Currency

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    // const id = +this.route.snapshot.params.id
    // this.item = this.itemService.getItem(id)
  }
}
