function sortByIndex<T extends { index: number }>(content: T[]): T[] {
   return [...content].sort((a, b) => a.index - b.index);
 }
 
 export default sortByIndex;
 