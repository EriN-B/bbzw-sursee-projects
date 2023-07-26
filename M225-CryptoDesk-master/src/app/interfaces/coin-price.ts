export interface CoinPrice {
  id: string;
  name: string;
  circulating_supply: number,
  total_supply: number;
  max_supply: number;
  quotes: quotes;
}

export interface quotes {
  USD:USD;
}

export interface USD {
    price: number,
    volume_24h: number;
    volume_24h_change_24h: number;
    market_cap: number,
    market_cap_change_24h: number,
    percent_change_15m: number,
    percent_change_30m: number,
    percent_change_1h: number,
    percent_change_6h: number,
    percent_change_12h: number,
    percent_change_24h: number,
    percent_change_7d:number,
    percent_change_30d: number,
    percent_change_1y: number
}
