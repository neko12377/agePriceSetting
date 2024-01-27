import { useState } from "react";
import { CurrencyLabel, Input, Tooltip } from "~components/atom";
import { addComma } from "~utilities";
import type { IPriceInput } from "./interfaces";

function removeComma(value: string) {
  return value.replace(/,/g, "");
}

export default function PriceInput(props: IPriceInput) {
  const [isValueValid, setIsValueValid] = useState<boolean>(false);
  const [value, setValue] = useState<string>("");

  function handleInputValue(e: React.ChangeEvent<HTMLInputElement>) {
    let inputValue = removeComma(e.target.value);
    const verifyInput = /^[\d]*[.]?[\d]*$/;
    if (verifyInput.test(inputValue) && inputValue.length > 0) {
      if (inputValue[0] === ".") {
        inputValue = "0" + inputValue;
      }
      const commaAddedOutput = addComma(inputValue)
      setValue(commaAddedOutput);
      setIsValueValid(true);
      if (props.onPriceChange) {
        props.onPriceChange(commaAddedOutput);
      }
    } else {
      if (inputValue.length === 0) {
        setValue("");
        if (props.onPriceChange) {
          props.onPriceChange("");
        }
      }
      setIsValueValid(false);
    }
  }

  return (
    <div className="flex flex-col h-full w-full justify-center items-center">
      <label className="w-full h-5 text-gray-400 text-sm font-bold mb-2">
        {props?.label || "入住費用(每人每晚)"}
      </label>
      <div className="w-full h-12 flex flex-row items-center justify-start">
        <CurrencyLabel customCss="rounded-l-lg" />
        <div className="flex justify-center items-center w-5/6">
          <Input
            name="price"
            value={value}
            placeholder={props?.placeholder || "請輸入費用"}
            valid={isValueValid}
            callback={handleInputValue}
            customCss="rounded-r-lg caret-gray-400"
          />
        </div>
      </div>
      <div className="flex flex-col w-full justify-center items-center relative">
        <Tooltip
          type="warning"
          position="-bottom-10"
          message="不可以為空白或數字以外的字元"
          customCss="rounded-md"
          enabled={!isValueValid} />
      </div>
    </div>
  );
}