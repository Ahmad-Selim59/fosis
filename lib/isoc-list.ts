import isocList from "@/data/isoc_list.json";
import type { Isoc } from "@/lib/isocs-data";

export function getIsocList(): Isoc[] {
  return isocList as Isoc[];
}
