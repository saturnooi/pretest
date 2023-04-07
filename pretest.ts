function merge(collection_1 : number[],  collection_2 : number[]) : number[] {
    const max = Math.max(...collection_1, ...collection_2);

    // create a counting array to keep track of how many times each number appears
    const counts = new Array(max + 1).fill(0);
  
    // count the number of times each number appears in collection_1
    for (const num of collection_1) {
      counts[num]++;
    }
  
    // count the number of times each number appears in collection_2
    for (const num of collection_2) {
      counts[num]++;
    }
  
    // create a merged and sorted array by iterating over the counting array
    const merged: number[] = [];
    for (let i = 0; i < counts.length; i++) {
      for (let j = 0; j < counts[i]; j++) {
        merged.push(i);
      }
    }
  
    return merged;
}


console.log( merge([1,4,3], [2,5,6]))