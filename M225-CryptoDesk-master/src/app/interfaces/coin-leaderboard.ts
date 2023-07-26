export interface CoinLeaderboard {
  id: string;
  name: string;
  rank: number,
  price: number;
  quotes: quotes;
}

export interface quotes {
  USD:USD;
}

export interface USD {
  price: number,
  volume_24h_change_24h: number;
}

