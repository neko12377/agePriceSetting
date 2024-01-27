interface IAgeGroupPrice {
  ageRange: { value: string }[];
  ageGroupsOverlapped?: boolean;
  onAgeGroupPriceChange: (ageGroupAndPrice: { ageGroup: number[], price: string }) => void;
}

export type { IAgeGroupPrice };