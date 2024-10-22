import { Item, SortType } from "../types/item";


// couldn't find a reliable parser: had to come up with this
export const parseCSV = (csv: string): Item[] => {
  const lines = csv.trim().split("\n");

  // Skip header row and parse data rows
  return lines.slice(1).map((line) => {
    const [createdAt, filename ] = line.split(";").map((field) => field.trim());
    return { filename, createdAt };
  });
};

// export const sortItems = (items: Item[], sortType: SortType): Item[] => {
//   const copy = [...items];

//   const naturalSort = (a: string, b: string) => {
//     return a.localeCompare(b, undefined, {
//       numeric: true,
//       sensitivity: 'base'
//     });
//   };

//   switch (sortType) {
//     case 'date-asc':
//       return copy.sort((a, b) => 
//         new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
//       );
//     case 'filename-asc':
//       return copy.sort((a, b) => naturalSort(a.filename, b.filename));
//     case 'filename-desc':
//       return copy.sort((a, b) => naturalSort(b.filename, a.filename));
//     default:
//       return copy;
//   }
// };


export const sortItems = (items: Item[], sortType: SortType): Item[] => {
  // Create a shallow copy of the items to avoid mutating the original array
  const copy = [...items];

  // Natural sort function for strings, supporting numeric sorting
  const naturalSort = (a: string, b: string) => {
    return a.localeCompare(b, undefined, {
      numeric: true, // Enable numeric sorting
      sensitivity: 'base' // Case-insensitive sorting
    });
  };

  // Sort based on the provided sort type
  switch (sortType) {
    case 'date-asc':
      // Sort by createdAt in ascending order
      return copy.sort((a, b) => 
        new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
      );
    case 'filename-asc':
      // Sort filenames in ascending natural order
      return copy.sort((a, b) => naturalSort(a.filename, b.filename));
    case 'filename-desc':
      // Sort filenames in descending natural order
      return copy.sort((a, b) => naturalSort(b.filename, a.filename));
    default:
      // Return the original array if the sort type is unrecognized
      return copy;
  }
};