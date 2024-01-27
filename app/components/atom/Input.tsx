import type { IInput } from "./interfaces";

export default function Input(props: IInput) {
  return (
    <input
      name={props.name || ""}
      type={props?.type || "text"}
      placeholder={props?.placeholder || ""}
      className={`w-full h-12 px-3 border focus:outline-none ${props.customCss} ${props.valid ? "border-gray-400" : "border-orange-400"}`}
      onChange={props?.callback}
      value={props?.value || ""}
      disabled={props?.disabled || false}
    />
  );
}