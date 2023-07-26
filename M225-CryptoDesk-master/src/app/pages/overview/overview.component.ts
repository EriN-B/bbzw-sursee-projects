import {Component, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import {CoinService} from "../../services/coin.service";
import { CoinPrice } from "../../interfaces/coin-price";
import { CoinLeaderboard } from "../../interfaces/coin-leaderboard";

export interface PeriodicElement {
  name: string;
  position: number;
  price: string;
  percent: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Bitcoin', price: '$29,375.48', percent: -2.93},
  {position: 2, name: 'Ethereum', price: '$29,375.48', percent: -1.80 },
  {position: 3, name: 'Tether', price: '$29,375.48', percent: -0.08},
  {position: 4, name: 'Binance Coin', price: '$29,375.48', percent: 1.18},
  {position: 5, name: 'Dogecoin', price: '$29,375.48', percent: -1.70},
  {position: 6, name: 'XRP', price: '$29,375.48', percent: 1.70},
  {position: 7, name: 'USD Coin', price: '$29,375.48', percent: -2.80},
  {position: 8, name: 'Polkadot', price: '$29,375.48', percent: -2.93},
  {position: 9, name: 'Uniswap', price: '2$9,375.48', percent: -2.93},
  {position: 10, name: 'Internet Computer', price: '$20.1797', percent: -2.93},
];

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {

  displayedColumns: string[] = ['position', 'name', 'price', 'percent'];

  // @ts-ignore
  public coinID: string[] = [];

  dataSource = ELEMENT_DATA;

  constructor(public coinService:CoinService) {
  }

  async ngOnInit() {
    await this.coinService.getTop10CoinId().then((data =>{
      this.coinID = data;
    }));
  }
  /*
  async getTopTenCoins(){
    await this.coinService.getCoinInfoById(this.coinId).then((data =>{
      this.coinInfo = data;
    }));
  }

  getTopTenCoins(){

  }

   */



}
