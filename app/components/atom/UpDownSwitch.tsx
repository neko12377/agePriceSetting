import { useState } from "react";
import ChevronUp from "./ChevronUp";
import ChevronDown from "./ChevronDown";
import type { IUpDownSwitch } from "./interfaces";

export default function UpDownSwitch(props: IUpDownSwitch) {
  const [isUp, setIsUp] = useState<boolean>(true);
  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      <button className="w-full h-full flex flex-col justify-center items-center" onClick={() => { setIsUp(pre => !pre) }}>
        {isUp
          ? <ChevronUp class_name={props.customCss} />
          : <ChevronDown class_name={props.customCss} />
        }
      </button>
    </div>
  )
}