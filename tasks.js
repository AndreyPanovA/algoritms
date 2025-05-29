
// Задача со стержнем
// Дана длина стержня и обект цен - найти максивальную цену и ее значения - я вернул хеш

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  
  const splitKernel = (kernel, costs) => {
    let k = kernel;
    let count;
    let hash = {};
    const a = Object.entries(costs).reverse();
  
    for (let i in a) {
      let [l, val] = a[i];
      let k = kernel;
      let max = 0;
      let len = [];
  
      while (k >= l && l > 0) {

        let before = l;
        if (costs?.[l]) {
          max += costs[l];
          k = k - l;
          len.push(l);
          l = k;
        }
        console.log('h', kernel, 'before', before, 'after', l);
  
        if (k < l && l > 0) {
          l--;

        }
      }
      hash[max] = len;
    }
  
    return hash;
  };
  
  console.log(
    splitKernel(4, {
      4: 9,
      3: 8,
      2: 5,
      1: 1,
    })
  );
  

//   Задача найти индекс элемента по индексу в матрице очень интересная 
const getIndex = (arr, target, i = 0) => {
    if (!arr[i] | (target == undefined)) return 'no such value';
    const l = arr[i].length;
    const next = l % target;
    if (l == next) return getIndex(arr, target - l, i + 1);
    return [i, target, arr[i][target - 1]];
  };
  
  console.log(getIndex([[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 60]], 6));
  
  const getIndex1 = (arr, target, L) => {
    const L = Ls + 1;
    if (target >= arr.length * L) return 'no such value';
  
    const i = Math.floor(target / L); // Индекс массива
  
    const j = target % L; // Индекс элемента внутри массива
    return [i, j, arr[i][j]];
  }