export type PriceType = {
  minPrice: number;
  maxPrice: number;
};

export type SortDirectionType = {
  id: number;
  sortBy: string;
  checked: boolean;
};

export type GenereType = {
  id: number;
  name: string;
  checked?: boolean;
};

export type FilterInitialType = {
  page: number;
  search: string;
  genere: GenereType[];
  price: PriceType;
  sortDirection: SortDirectionType[];
};
