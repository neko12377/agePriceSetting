import { useState } from "react";
import { useFetcher } from "@remix-run/react";
import type { IAgeGroupPriceList } from "./interfaces";
import { AgeGroupPrice } from "~components/organism";
import { getNumberIntervals } from "~utilities";

export default function AgeGroupPriceList(props: IAgeGroupPriceList) {
  const ageRange = new Array(21)
    .fill(0)
    .map((_, index) => ({ value: index.toString() }))

  const [ageGroupPriceItems, setAgeGroupPriceItems] = useState<Record<string, { ageGroup: number[], price: string }>>(props.ageGroupPriceListItems);

  const fetcher = useFetcher();

  function getAgeGroups(ageGroupPriceItems: Record<string, { ageGroup: number[], price: string }>) {
    const ageGroups: number[][] = [];
    for (const key in ageGroupPriceItems) {
      ageGroups.push(ageGroupPriceItems[key].ageGroup);
    }
    return ageGroups;
  }
  const ageGroups = getAgeGroups(ageGroupPriceItems);
  const [ageGroupsOverlapped, setAgeGroupsOverlapped] = useState<boolean>(getNumberIntervals(ageGroups).overlap.length > 0);
  const [areAllAgeGroupsIncluded, setAreAllAgeGroupsIncluded] = useState<boolean>(getNumberIntervals(ageGroups).notInclude.length === 0);

  function randomKeyGenerator(stringLength: number) {
    let randomString = ''
    const chars = 'abcdefghijklmnopqrstuvwxyz1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZ'

    for (let i = 0; i < stringLength; i++) {
      randomString += chars.charAt(Math.floor(Math.random() * chars.length))
    }
    return randomString
  }

  return (
    <div className="w-dvw h-dvh flex flex-col justify-center items-center">
      <div className="w-2/3 h-full flex flex-col justify-start items-center overflow-scroll">
        {ageGroupPriceItems && Object.keys(ageGroupPriceItems).map((key, index) => {
          return (
            <div
              key={key}
              className="w-full h-1/3 flex flex-col justify-center items-center"
            >
              <fetcher.Form className="w-full h-8 flex flex-row justify-between">
                <p className="text-gray-400 text-sm font-bold">
                  {`價格設定-${index + 1}`}
                </p>
                {key !== "init" &&
                  <button
                    name="ageGroupPriceListState"
                    value={JSON.stringify(ageGroupPriceItems)}
                    onClick={() => {
                      const newAgeGroupPriceItems = ageGroupPriceItems;
                      delete newAgeGroupPriceItems[key];
                      setAgeGroupPriceItems(newAgeGroupPriceItems);
                      setAgeGroupsOverlapped(getNumberIntervals(getAgeGroups(ageGroupPriceItems)).overlap.length > 0);
                      setAreAllAgeGroupsIncluded(getNumberIntervals(getAgeGroups(ageGroupPriceItems)).notInclude.length === 0);
                    }}
                  >
                    <p className="text-red-400 text-sm font-bold">
                      X移除
                    </p>
                  </button>}
              </fetcher.Form>
              <div className="w-full h-2/6 flex flex-row justify-center items-center">
                <AgeGroupPrice
                  onAgeGroupPriceChange={(ageGroupAndPrice) => {
                    setAgeGroupPriceItems(pre => {
                      const rep = pre;
                      rep[key] = ageGroupAndPrice;
                      return rep;
                    });
                    setAgeGroupsOverlapped(getNumberIntervals(getAgeGroups(ageGroupPriceItems)).overlap.length > 0);
                    setAreAllAgeGroupsIncluded(getNumberIntervals(getAgeGroups(ageGroupPriceItems)).notInclude.length === 0);
                    props.onChange(Object.keys(ageGroupPriceItems).map((key) => (ageGroupPriceItems[key])));
                  }}
                  ageRange={ageRange}
                  ageGroupsOverlapped={ageGroupsOverlapped}
                />
              </div>
            </div>
          )
        })}
        <fetcher.Form className="w-full h-8 flex flex-row justify-start items-center">
          <button
            name="ageGroupPriceListState"
            value={JSON.stringify(ageGroupPriceItems)}
            onClick={() => {
              const key = randomKeyGenerator(Math.floor(Math.random() * 10 + 5));
              const newAgeGroupPriceItems = ageGroupPriceItems;
              newAgeGroupPriceItems[key] = { ageGroup: [0, 0], price: "" };
              setAgeGroupPriceItems(newAgeGroupPriceItems);
            }}
            disabled={areAllAgeGroupsIncluded}
          >
            <p className={`text-sm font-bold mb-2 ${areAllAgeGroupsIncluded ? "text-gray-200": "text-green-400"}`}>
              +新增價格設定
            </p>
          </button>
        </fetcher.Form>
      </div>
    </div>
  )
}