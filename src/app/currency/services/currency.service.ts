import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Currency } from '../models/currency.model';

@Injectable()
export class CurrencyService {
    private ROOT_URL = `https://api.coingecko.com/api/v3`
   
    constructor(private http:HttpClient) { }

    getCurrencyData():Observable<Currency[]>{
console.log("-------5555---------------getCurrencyData:----------55-------------");

        let params =new HttpParams().set('vs_currency', 'usd') 
       
       return  this.http.get<Currency[]>(`${this.ROOT_URL}/coins/markets`,{params}) 
    }
    searchCoin(query:string):Observable<Currency[]>{
        console.dir(query);
        return  this.http.get<Currency[]>(`${this.ROOT_URL}/search?query=${query}`)  
    }
    
}