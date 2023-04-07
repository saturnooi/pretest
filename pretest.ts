function merge(collection_1 : number[],  collection_2 : number[]) : number[] {
    const max = Math.max(...collection_1, ...collection_2);

   
    const counts = new Array(max + 1).fill(0);
  
    
    for (const num of collection_1) {
      counts[num]++;
    }
  
    
    for (const num of collection_2) {
      counts[num]++;
    }
  
    
    const merged: number[] = [];
    for (let i = 0; i < counts.length; i++) {
      for (let j = 0; j < counts[i]; j++) {
        merged.push(i);
      }
    }
  
    return merged;
}


console.log( merge([1,4,3], [2,5,6]))