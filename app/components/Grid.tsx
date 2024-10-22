import GridItem from "./GridItem";

import { SortType, Item } from "../types/item";
import { useEffect, useState } from "react";

type GridProps = {
  sort: SortType;
};

const Grid = ({ sort }: GridProps) => {
  async function getFiles(sort?: string) {
    const res = await fetch(
      // `${process.env.API_URL}/api/data?sort=${sort || "date-asc"}`,
      `/api/data?sort=${sort || "date-asc"}`
      // {
      //   next: { revalidate: 60 }, // Revalidate every minute
      // }
    );

    if (!res.ok) throw new Error("Failed to fetch files");
    const data = await res.json();
    setFiles(data);
    return data;
  }
  const [files, setFiles] = useState([]);
  useEffect(() => {
    getFiles(sort);
  }, [sort]);

  return (
    <div className="p-6 bg-gray-50 rounded-xl">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
        {files.map((file: Item, index: number) => (
          <GridItem
            key={index}
            filename={file.filename}
            timestamp={file.createdAt}
          />
        ))}
      </div>
    </div>
  );
};

export default Grid;
