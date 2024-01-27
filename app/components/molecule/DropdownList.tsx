import { useState } from "react";
import { Input, List, UpDownSwitch } from "~components/atom";
import type { IDropdownList } from "./interfaces";

export default function DropdownList(props: IDropdownList) {
  const [showList, setShowList] = useState(false);
  const [value, setValue] = useState<string>("");
  return (
    <div className="w-full h-full flex flex-col justify-start items-center relative">
      <div className="w-full h-full flex flex-row justify-center items-center">
        <div className="w-5/6 h-full flex flex-row justify-center items-center">
          <Input
            name={props.name || ""}
            valid={props.valid || true}
            placeholder={props.placeholder || ""}
            customCss="border-r-0 rounded-l-lg rounded-r-none caret-transparent"
            value={value}
          />
        </div>
        <button
          className="w-1/6 h-full flex justify-center items-center cursor-pointer border-solid border border-gray-400 border-l-0 rounded-r-lg"
          onClick={() => setShowList(pre => !pre)}
        >
          <UpDownSwitch customCss="w-1/2 h-1/2" />
        </button>
      </div>
      <div
        className={
          `flex flex-col justify-center items-center absolut bg-gray-100 rounded-lg -bottom-32 border-gray-400 transition-all ${showList ? "w-full h-32 border" : "w-0 h-0"}`
        }>
        <List
          items={props.listItems}
          onItemClick={
            (items) => {
              props.onListItemClick(items);
              setValue(items.value);
              setShowList(false);
            }
          }
          itemCss="hover:bg-gray-300 rounded-md"
          disabledItems={props.disabledItems}
          customCss="z-20"
        />
      </div>
    </div>
  );
}