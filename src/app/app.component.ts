import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


//para declar los datos que se encuentra el array
interface Coin {
  id: string;
  name: string;
  symbol: string;
  image: string;
  current_price:number;
  price_change_percentage_24: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit  {
  constructor(private http: HttpClient) { }
   
  coins: [] = []
  ngOnInit() {
    this.http.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')
    .subscribe((res) => {
      console.log(res);
  }
  );
   }
}
