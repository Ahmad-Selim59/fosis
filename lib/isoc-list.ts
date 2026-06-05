import isocList from "@/data/isoc_list.json";
import { ISOC_PAGE_SIZE, type Isoc } from "@/lib/isocs-data";

export function getIsocList(): Isoc[] {
  return isocList as Isoc[];
}

export function getFeaturedIsocs(count = ISOC_PAGE_SIZE): Isoc[] {
  return getIsocList().slice(0, count);
}
