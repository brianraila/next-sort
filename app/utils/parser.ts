import { Item, SortType } from "../types/item";


// couldn't find a reliable parser: had to come up with this
export const parseCSV = (csv: string): Item[] => {
  const lines = csv.trim().split("\n");

  // Skip header row and parse data rows
  return lines.slice(1).map((line) => {
    const [filename, createdAt] = line.split(",").map((field) => field.trim());
    return { filename, createdAt };
  });
};

export const sortItems = (items: Item[], sortType: SortType): Item[] => {
  const copy = [...items];

  const naturalSort = (a: string, b: string) => {
    return a.localeCompare(b, undefined, {
      numeric: true,
      sensitivity: 'base'
    });
  };

  switch (sortType) {
    case 'date-asc':
      return copy.sort((a, b) => 
        new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
      );
    case 'filename-asc':
      return copy.sort((a, b) => naturalSort(a.filename, b.filename));
    case 'filename-desc':
      return copy.sort((a, b) => naturalSort(b.filename, a.filename));
    default:
      return copy;
  }
};