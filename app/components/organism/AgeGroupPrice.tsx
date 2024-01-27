import { useState } from "react";
import type { IAgeGroupPrice } from "./interfaces";
import { AgeGroupSelect, PriceInput } from "~components/molecule";

export default function AgeGroupPrice(porps: IAgeGroupPrice) {
  const [ageGroup, setAgeGroup] = useState<number[]>([0, 0]);
  const [price, setPrice] = useState<string>("");

  return (
    <div className="w-full h-full flex flex-row justify-center items-center">
      <div className="w-1/2 h-full flex flex-col justify-center items-center">
        <AgeGroupSelect
          ageRange={porps.ageRange}
          onAgeGroupChange={(callbaceAgeGroup) => {
            setAgeGroup(callbaceAgeGroup);
            porps.onAgeGroupPriceChange({ ageGroup: callbaceAgeGroup, price });
          }}
          ageGroupsOverlapped={porps.ageGroupsOverlapped}
        />
      </div>
      <div className="w-10 h-full" />
      <div className="w-1/2 h-full flex flex-col justify-center items-center">
        <PriceInput onPriceChange={(callbackPrice) => {
          setPrice(callbackPrice)
          porps.onAgeGroupPriceChange({ ageGroup, price: callbackPrice })
        }} />
      </div>
    </div>
  )
}