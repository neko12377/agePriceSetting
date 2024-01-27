import type { ICurrencyLabel } from "./interfaces";

export default function CurrencyLabel(props: ICurrencyLabel) {
  return (
    <div className="flex flex-row items-center w-1/5">
      <p className={`flex w-full justify-center items-center text-xs font-bold h-12 bg-gray-100 text-gray-500 border border-gray-400 border-r-0 ${props.customCss}`}>
        {props?.currency || "TWD"}
      </p>
    </div>
  )
}