import path from "path";
import fs from "fs";
import { parseCSV } from "@/app/utils/parser";
import { sortItems } from "@/app/utils/parser";
import { SortType } from "@/app/types/item";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  try {
    // Get sort type from query parameter
    const searchParams = request.nextUrl.searchParams;
    const sortType = (searchParams.get("sort") as SortType) || "date-asc";

    // Reading from a CSV file
    const filePath = path.join(process.cwd(), "app", "data.csv");
    const fileContents = fs.readFileSync(filePath, "utf8");

    // Parse and sort items
    const items = parseCSV(fileContents);
    console.log(items);
    const sortedItems = sortItems(items, sortType);

    return Response.json(sortedItems);
  } catch (error) {
    console.error("Error processing items:", error);
    return Response.json({ error: "Failed to load items" }, { status: 500 });
  }
}
