export default function orderByProps(objectSort, arraySort = []) {
    let arrayKeys = [];
    for (const key in objectSort) {
      if (arraySort.indexOf(key) === -1) {
        arrayKeys.push(key);
      }
    }
    
    arrayKeys = [...arraySort, ...arrayKeys.sort()];
  
    const result = [];
    for (const key of arrayKeys) {
      result.push({ key, value: objectSort[key] });
    }
    
    return result;
  }
