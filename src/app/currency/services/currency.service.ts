import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Currency } from '../models/currency.model';

@Injectable()
export class CurrencyService {
    private ROOT_URL = `https://api.coingecko.com/api/v3/coins/markets`
    constructor(private http:HttpClient) { }

    getCurrencyData():Observable<Currency[]>{

        let params =new HttpParams().set('vs_currency', 'usd') 
       
       return  this.http.get<Currency[]>(`${this.ROOT_URL}`,{params}) 
    }
    
}