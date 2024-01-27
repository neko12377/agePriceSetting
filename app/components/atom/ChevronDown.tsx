import type { IIconProps } from "./interfaces";

export default function ChevronDown(props: IIconProps) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={props.stroke_width || 1.5} stroke="currentColor" className={props.class_name || "w6 h6"}>
      <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
    </svg>
  )
}