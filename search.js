const arr = Array.from({ length: 100000 }, () => Math.round(Math.random() * 100000)).sort(
    (a, b) => a - b
  );
  function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  
  const getIndex = ({ leftIdx, rightIdx, target, arr }) => {
    const numerator = (target - arr[leftIdx]) * (leftIdx - rightIdx);
  
    const determinator = arr[leftIdx] - arr[rightIdx];
    return Math.floor(numerator / determinator) + leftIdx;
  };
  
  const interpolationSort = (arr, target) => {
    let [leftIdx, rightIdx] = [0, arr.length - 1];
  
    while (arr[leftIdx] < target && target < arr[rightIdx]) {
      const nextIdx = getIndex({ arr, target, leftIdx, rightIdx });
      console.log(JSON.stringify({ n: arr[nextIdx], nextIdx, leftIdx, rightIdx, target }, null, 2));
      if (arr[nextIdx] == target) return nextIdx;
      if (arr[nextIdx] > target) {
        rightIdx = nextIdx - 1;
      }
      if (arr[nextIdx] < target) {
        leftIdx = nextIdx + 1;
      }
      if (arr[leftIdx] == target) return leftIdx;
      if (arr[rightIdx] == target) return rightIdx;
    }
    return -1;
  };
  console.log(interpolationSort(arr, arr[Math.floor(Math.random() * arr.length)]), arr);
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  