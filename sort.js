const quickSort = arr => {
    if (arr.length < 2) {
      return arr;
    }
    const mid = Math.floor(arr.length / 2);
    const [left, right] = [[], []];
  
    for (let i = 0; i < arr.length; i++) {
      if (i == mid) continue;
      (arr[i] <= arr[mid] ? left : right).push(arr[i]);
    }
    return [...quickSort(left), arr[mid], ...quickSort(right)];
  };
  
  const mergeSort = arr => {
    if (arr.length < 2) {
      return arr;
    }
    const mid = Math.floor(arr.length / 2);
    const [left, right] = [mergeSort(arr.slice(0, mid)), mergeSort(arr.slice(mid))];
    const result = [];
    while (left.length && right.length) {
      if (left[0] <= right[0]) {
        result.push(left.shift());
        continue;
      }
      result.push(right.shift());
    }
    result.push(...left, ...right);
    return result;
  };
  
  const buildHeap = (arr, n, i) => {
    let largest = i;
    const left = 2 * i + 1;
    const right = left + 1;
  
    if (left < n && arr[left] > arr[largest]) {
      largest = left;
    }
    if (right < n && arr[right] > arr[largest]) {
      largest = right;
    }
    if (i !== largest) {
      [arr[i], arr[largest]] = [arr[largest], arr[i]];
      buildHeap(arr, n, largest);
    }
  };
  const heapSort = arr => {
    let heapSize = arr.length;
    const nodeLeves = Math.floor(arr.length / 2) - 1;
    for (let i = nodeLeves; i >= 0; i--) {
      buildHeap(arr, heapSize, i);
    }
    for (let i = heapSize - 1; i >= 0; i--) {
      [arr[0], arr[i]] = [arr[i], arr[0]];
      heapSize--;
      buildHeap(arr, heapSize, 0);
    }
    return arr;
  };
  
  const arr = Array(100)
    .fill('')
    .map(el => Math.round(Math.random() * 100));
  console.log(quickSort(arr));
  console.log(mergeSort(arr));
  console.log(heapSort(arr));
  