export interface Item {
  createdAt: string;
  filename: string;
}

export type SortType = "date-asc" | "filename-asc" | "filename-desc";

export const DropdownOptions = {
  "Date Ascending": "date-asc",
  "Filename Ascending": "filename-asc",
  "Filename Descending": "filename-desc",
};


export type DropdownOptionKeys = "Date Ascending" | "Filename Ascending" | "Filename Descending";

// export type DropdownOptionsType = {
//   [key in DropdownOptionKeys]: SortType;
// };

// Define DropdownOptionsType with a mapped type and an index signature
export type DropdownOptionsType = {
  [key in DropdownOptionKeys]: SortType; // Predefined keys
} & {
  [key: string]: SortType; // Allows any additional string keys
};