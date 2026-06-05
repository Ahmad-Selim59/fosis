import isocList from "@/data/isoc_list.json";
import { type Isoc } from "@/lib/isocs-data";

export const HOMEPAGE_FEATURED_ISOC_COUNT = 3;

export function getIsocList(): Isoc[] {
  return isocList as Isoc[];
}

export function getFeaturedIsocs(count = HOMEPAGE_FEATURED_ISOC_COUNT): Isoc[] {
  return getIsocList().slice(0, count);
}
