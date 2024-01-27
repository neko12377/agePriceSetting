import { useState } from "react";
import { Tooltip } from "~components/atom";
import DropdownList from "./DropdownList";
import type { IAgeGroupSelect } from "./interfaces";

export default function AgeGroupSelect(props: IAgeGroupSelect) {
  const ages = props.ageRange;
  const [, setAgeGroup] = useState<number[]>([0, 0]);
  const [leftSideDisabledItems, setLeftSideDisabledItems] = useState<string[]>([]);
  const [rightSideDisabledItems, setRightSideDisabledItems] = useState<string[]>([]);
  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      <div className="w-full h-5 text-gray-400 text-sm font-bold mb-2">年齡</div>
      <div className="w-full h-12 flex flex-row justify-center items-center">
        <div className="w-3/5 h-full flex flex-col justify-center items-center">
          <DropdownList
            listItems={ages}
            onListItemClick={(item) => {
              setRightSideDisabledItems(ages.slice(0, parseInt(item.value)).map(item => item.value));
              setAgeGroup(pre => {
                const rep = [...pre];
                rep[0] = parseInt(item.value);
                props.onAgeGroupChange(rep);
                return rep;
              })
            }}
            disabledItems={leftSideDisabledItems}
          />
        </div>
        <div className="w-8 h-full flex flex-col justify-center items-center bg-gray-100">
          <p className="text-gray-500 text-xl">
            ~
          </p>
        </div>
        <div className="w-3/5 h-full flex flex-col justify-center items-center">
          <DropdownList
            listItems={ages}
            onListItemClick={(item) => {
              setLeftSideDisabledItems(ages.slice(parseInt(item.value) + 1).map(item => item.value));
              setAgeGroup(pre => {
                const rep = [...pre];
                rep[1] = parseInt(item.value);
                props.onAgeGroupChange(rep);
                return rep;
              })
            }}
            disabledItems={rightSideDisabledItems}
          />
        </div>
      </div>
      <div className="flex flex-col w-full justify-center items-center relative">
        <Tooltip
          type="warning"
          message="年齡區間不可重疊"
          enabled={props.ageGroupsOverlapped || false}
          position="-bottom-10"
          customCss="rounded-md"
        />
      </div>
    </div>
  )
}