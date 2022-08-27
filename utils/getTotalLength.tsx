import { ITrail } from "../data/trails";

export function getTotalLength(t: ITrail[]): number {
  let totalLength = 0;
  for (let i = 0; i < t.length; i++) {
    totalLength += t[i].length;
  }
  return totalLength;
}
