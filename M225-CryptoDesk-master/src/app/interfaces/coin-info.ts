export interface CoinInfo {
  id: string;
  rank: number,
  name: string,
  description: string,
  open_source: boolean | null,
  org_structure: string | null
  links: links;
  symbol: string;
  type: string;
}

export interface links {
  explorer: string[] | undefined;
  facebook: string | undefined;
  reddit: string | undefined;
  source_code: string | undefined;
  website: string | undefined;
  youtube: string | undefined;
}
