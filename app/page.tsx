'use client'

import { useState } from "react";
import DropdownSelector from "./components/Dropdown";
import Grid from "./components/Grid";
import { DropdownOptionsType, SortType } from "./types/item";

const DropdownOptions: DropdownOptionsType = {
  "Date Ascending": "date-asc",
  "Filename Ascending": "filename-asc",
  "Filename Descending": "filename-desc",
};


export default function Home() {

  const [selectedOption, setSelectedOption] = useState<SortType>("date-asc");

  const handleChange: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    const value = e.currentTarget.value as SortType;
    console.log(value);
    setSelectedOption(value);
  };
  


  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <DropdownSelector dropdownOptions={DropdownOptions} onChange={handleChange}/>
        <Grid sort={selectedOption}/>

      </main>
    </div>
  );
}
