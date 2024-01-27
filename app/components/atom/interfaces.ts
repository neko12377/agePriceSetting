interface IInput {
  placeholder?: string;
  valid?: boolean;
  type?: string;
  name: string;
  customCss?: string;
  value?: string;
  disabled?: boolean;
  callback?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

interface ICurrencyLabel {
  currency?: string;
  customCss?: string;
}

interface ITooltip {
  message: string;
  customCss?: string;
  enabled?: boolean;
  position?: string;
  type: "error" | "warning" | "info" | "success";
}

interface IListItem {
  value: string;
}

interface IList {
  items: IListItem[];
  customCss?: string;
  itemCss?: string;
  disabledItems?: string[];
  onItemClick: (item: IListItem) => void;
}

interface IIconProps {
  class_name?: string;
  stroke_width?: number;
}

interface IUpDownSwitch {
  customCss?: string;
}

export type { IInput, ICurrencyLabel, ITooltip, IList, IListItem, IIconProps, IUpDownSwitch };