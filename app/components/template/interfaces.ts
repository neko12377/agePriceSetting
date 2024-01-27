interface IAgeGroupPriceListResult {
  ageGroup: number[];
  price: string;
}

interface IAgeGroupPriceList {
  ageGroupPriceListItems: Record<string, IAgeGroupPriceListResult>;
  onChange: (result: IAgeGroupPriceListResult[]) => void;
}

export type { IAgeGroupPriceList };
