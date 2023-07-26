import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CoinInfo } from "../../interfaces/coin-info";
import { CoinPrice } from "../../interfaces/coin-price";
import { CoinService } from "../../services/coin.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  buttonColor: string = '';

  coinId:string | null = '';
  // @ts-ignore
  public _coinInfo: CoinInfo;
  // @ts-ignore
  public _coinMarketPrice: CoinPrice;

  get coinInfo(): CoinInfo {
    return this._coinInfo;
  }

  set coinInfo(value: CoinInfo) {
    this._coinInfo = value;
  }

  get coinMarketPrice(): CoinPrice {
    return this._coinMarketPrice;
  }

  set coinMarketPrice(value: CoinPrice) {
    this._coinMarketPrice = value;
  }

  constructor(public route:ActivatedRoute,public coinService: CoinService, public router: Router) { }

  ngOnInit(){
    this.coinId = this.route.snapshot.paramMap.get('id');
    this.checkReroute();
    this.getCoinInfoById();
    this.getCoinMarketDataById();
  }

   async getCoinInfoById(){
    await this.coinService.getCoinInfoById(this.coinId).then((data =>{
      this.coinInfo = data;
    }));
  }

  async getCoinMarketDataById(){
    await this.coinService.getCoinMarketDataById(this.coinId).then((data =>{
      this.coinMarketPrice = data;;
    }));
    if(this.coinMarketPrice.quotes.USD.market_cap_change_24h >= 0){
      this.buttonColor = 'success';
    }else{
      this.buttonColor = 'warn';
    }
  }

  removeDecimal(number: number):string{
    return (Math.round(number * 100) / 100).toFixed(2);
  }

  checkReroute(){
    if(this.coinId == '' || this.router.url == '/detail'){
      this.router.navigateByUrl('/home');
    }
  }
}
