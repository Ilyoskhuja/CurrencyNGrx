import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map, Observable } from "rxjs";
import { SearchResponceModel,Currency} from "../models";


@Injectable()
export class CurrencyService {
  private ROOT_URL = `https://api.coingecko.com/api/v3`;

  constructor(private http: HttpClient) {}

  getCurrencyData(): Observable<Currency | SearchResponceModel []> {
    let params = new HttpParams().set("vs_currency", "usd");

    return this.http.get<Currency | SearchResponceModel []>(`${this.ROOT_URL}/coins/markets`, {
      params,
    });
  }
  searchCoin(query: string) {
    return this.http.get<Currency | SearchResponceModel>(`${this.ROOT_URL}/search?query=${query}`).pipe(
      map((r) => {
        return r["coins"];
      })
    );
  }
}
