const quicksort = (arr)=> {
    if(arr.length<2) return arr;
    const pivot = Math.floor(arr.length / 2)
    let [left, right] = [[], []]
    for (let i in arr) {
        if(i==pivot) continue
        if(arr[i]<=arr[pivot]) {
            left.push(arr[i]);
            continue
        }
        right.push(arr[i])
    }

    return [...quicksort(left), arr[pivot],...quicksort(right)]
}


// const merge_sort = (arr)=> {
//     if(arr.length<2) return arr;
//     const mid = Math.floor(arr.length / 2)
//     const [left, right] = [arr.slice(0,mid), arr.slice(mid)].map(merge_sort)
//     console.log("hire", left, right)
//     const result = []
//     while(left[0] && right[0]) {
//         if(left[0]<=right[0]) {
//             result.push(left.pop())
//             continue;
//         }
//         result.push(right.pop())
//     }
//     result.push(...left, ...right)

//     return result
// }

const Logger = {
    arr: Array(8).fill("").map(el=> Math.round(Math.random() * 100)),
    quicksort() {
        console.log(quicksort.name, "=", quicksort(this.arr))
    },
    merge_sort() {
        console.log(merge_sort.name, "=", merge_sort(this.arr))
    }
}

// Logger.quicksort()
// Logger.merge_sort()




const merge_sort = (arr)=> {
    if(arr.length<2) return arr
    const mid = Math.floor(arr.length / 2)
    const result = []

    const [left, right] = [arr.slice(0,mid), arr.slice(mid)]
    // .map(merge_sort)

    console.log("hireLeft", left, right, arr)
    while(left.length && right.length) {
        if(left[0]<=right[0]) {
            result.push(left.pop())
            continue
        }
        result.push(right.pop())
    }
    result.push(...left, ...right)
    console.log("hireResult", result)
    return result
}

function mergeHelper1(left, right) {
    let sortedArr = [] // the sorted items will go here
  
    while (left.length && right.length) {
      // Insert the smallest item into sortedArr
      if (left[0] < right[0]) {
        sortedArr.push(left.shift())
      } else {
        sortedArr.push(right.shift())
      }
    }
  
    // Use spread operators to create a new array, combining the three arrays
    return [...sortedArr, ...left, ...right]
  }
  
  const mergeHelper = (left, right) => {
    const result = [];
    while (left.length && right.length) {
      if (left[0] > right[0]) {
        result.push(left.pop());
        continue;
      }
      result.push(right.pop());
    }
    return [...result, ...left, ...right];
  };
  
  const mergeSort = arr => {
    if (arr.length < 2) return arr;
    const mid = Math.floor(arr.length / 2);
    const [left, right] = [arr.slice(0, mid), arr.slice(mid)].map(mergeSort);
    return mergeHelper1(left, right);
  };
  
//   console.log(mergeSort([99, 78, 38, 62, 74, 6, 25, 32]));


  const quickMergeSort = (arr)=> {
    // if(arr.length<2) return arr
    // const mid = Math.floor(arr.length / 2)
    // const [left, right]= [[], []]
    // for (let i in arr) {
    //   if(mid==i) continue
    //   (arr[i]<arr[mid] ? left : right).push(arr[i])
    // }
    // return [...quickSort(left), arr[mid], ...quickSort(right)]
  
    if(arr.length<2) return arr
    const mid = Math.floor(arr.length / 2)
    const [left, right] = [arr.slice(0,mid), arr.slice(mid)].map(quickSort)
    const result = []
    while(left.length && right.length) {
      if(left[0]<=right[0]) {
        result.push(left.shift())
        continue
      }
      result.push(right.shift())
    }
    return [...result, ...left,...right]
  }
//   console.log(quickMergeSort([99, 78, 38, 62, 74, 6, 25, 32]));