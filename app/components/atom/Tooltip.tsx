import type { ITooltip } from "./interfaces";

export default function Tooltip(props: ITooltip) {

  const typeColorMap = {
    warning: "bg-orange-400",
    error: "bg-red-400",
    success: "bg-green-400",
    info: "bg-blue-400",
  }

  return (
    <div className={`flex items-center justify-center px-2 absolute opacity-50 ${props.position} ${typeColorMap[props.type]} ${props.customCss || ""} ${props.enabled ? "h-10 w-full" : "hidden"} `}>
      <p className={`text-xs ${props.enabled ? "flex" : "hidden"}`}>
        {props.enabled ? props?.message || "Tooltip" : ""}
      </p>
    </div>
  )
}