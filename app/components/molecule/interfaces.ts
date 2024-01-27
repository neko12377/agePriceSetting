import { IListItem } from "~components/atom/interfaces";

interface IPriceInput {
  label?: string;
  placeholder?: string;
  invalid?: string;
  onPriceChange?: (value: string) => void;
}

interface IDropdownList {
  listItems: IListItem[];
  placeholder?: string;
  valid?: boolean;
  name?: string;
  disabledItems?: string[];
  onListItemClick: (item: IListItem) => void;
}

interface IAgeGroupSelect {
  ageRange: { value: string }[];
  onAgeGroupChange: (ageGroup: number[]) => void;
  ageGroupsOverlapped?: boolean;
}

export type { IPriceInput, IDropdownList, IAgeGroupSelect };