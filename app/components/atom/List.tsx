import type { IList } from "./interfaces";

export default function List(props: IList) {
  return (
    <ul className={`w-full h-full flex flex-col justify-start items-center overflow-scroll ${props.customCss || ""}`}>
      {props.items.map((item, index) => (
        <li
          key={`${item.value}_${index}`}
          className={`flex items-center justify-center w-full h-18 ${props.itemCss || ""}`}
        >
          <button
            className={`w-full h-full ${props.disabledItems?.includes(item.value) ? "text-gray-200" : ""}`}
            onClick={() => props.onItemClick(item)}
            disabled={props.disabledItems?.includes(item.value)}>
            {item.value}
          </button>
        </li>
      ))}
    </ul>
  );
}