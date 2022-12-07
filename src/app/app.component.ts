import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


//para declar los datos que se encuentra el array
interface Coins {
  id: string;
  name: string;
  symbol: string;
  image: string;
  current_price:number;
  price_change_percentage_24h: number;
  total_volume:number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit  {

  
  constructor(private http: HttpClient) { }
   
  coins: Coins [] = []
  filtrado:Coins [] = []
  titles: string [] = [
    '#',
    'Coin',
    'Precio  en dolares',
    'Precio cambio',
    'Volume de 24 h'
  
  ]

  searchText='';
  searchCoin(){
    this.filtrado= this.coins.filter((coin)=>
     coin.name.toLocaleLowerCase().includes(this.searchText.toLowerCase()) ||
     coin.symbol.toLocaleLowerCase().includes(this.searchText.toLowerCase())
     
     );
  }

  ngOnInit() {
    this.http.get<Coins[]>('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')
    .subscribe((res) => {
      this.coins = res;
      this.filtrado = res;
  }
  );
   }
}
