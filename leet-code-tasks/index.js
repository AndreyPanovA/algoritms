// https://leetcode.com/problems/merge-strings-alternately/?envType=study-plan-v2&envId=leetcode-75

/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    let result = '';
    let len = word1.length;
    for (let i in word1) {
        if (word1?.[i] && word2?.[i]) {
            result += `${word1[i]}${word2[i]}`;
            continue;
        }
    }
    if (word1.length > word2.length) return result + word1.slice(word2.length);
    return result + word2.slice(word1.length);
};

//Cool

var mergeAlternately = function(word1, word2) {
    let result = ""
    let i = 0
    while(i< word1.length || i<word2.length) {
        if(word1[i]) result+=word1[i]
        if(word2[i]) result+=word2[i]
        i++
    }
    return result
}
//-----

//TODO повторить теорему евклида
// https://leetcode.com/problems/greatest-common-divisor-of-strings/?envType=study-plan-v2&envId=leetcode-75

var gcdOfStrings = function(str1, str2) {
    // Проверяем, можно ли "склеить" строки в любом порядке одинаково
    if (str1 + str2 !== str2 + str1) {
        return "";
    }

    // Функция для вычисления НОД двух чисел (длины строк)
    const gcd = (a, b) => {
        while (b !== 0) {
            [a, b] = [b, a % b];
        }
        return a;
    };

    const lengthGCD = gcd(str1.length, str2.length);
    return str1.slice(0, lengthGCD);
};

var gcdOfStrings = function(str1, str2) {
    let greatestDivisor = "";
    if(str1 + str2 == str2 + str1){

        let divisor = "";
        let shorter = str1.length < str2.length ? str1 : str2;
        const minLength = Math.min(str1.length,str2.length);
        for(let i=0;i<minLength;i++){
            divisor += shorter[i]
            if(str1.split(divisor).join("") == "" &&  str2.split(divisor).join("") == ""){
                greatestDivisor=divisor;
            }
        }}
    return greatestDivisor;
};

var gcdOfStrings = function(str1, str2) {
    return str1 + str2 !== str2 + str1 ? "" : str1.substring(0, (g = (x, y) => !y ? x : g(y, x % y))(str1.length, str2.length));

};
//EASY
//https://leetcode.com/problems/kids-with-the-greatest-number-of-candies/?envType=study-plan-v2&envId=leetcode-75

/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
    const largest = Math.max(...candies)
    return candies.map(candy => candy + extraCandies >= largest)
};


// isOkButStilEasy
// https://leetcode.com/problems/can-place-flowers/?envType=study-plan-v2&envId=leetcode-75
/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {
    let c = 0
    for (let i = 0; i<flowerbed.length;i++) {

        if((flowerbed?.[i - 1]==0 || flowerbed?.[i - 1]==undefined) && flowerbed?.[i]==0 && (flowerbed?.[i + 1]==0 || flowerbed?.[i + 1]==undefined)) {
            c++
            i++ // есть решение когда можно мутировать массив и пройти все
        }

    }

    return c>=n
};


//Interesting
// https://leetcode.com/problems/reverse-vowels-of-a-string/?envType=study-plan-v2&envId=leetcode-75
/**
 * @param {string} s
 * @return {string}
 */

const isUpper = l => {
    return l == l.toUpperCase();
};
const swapLetterCases = arr => {
    console.log('h', arr);
    const [u1, u2] = arr.map(isUpper);
    const [l1, l2] = arr;
    console.log('h1', arr, !u1 && u2);
    if (u1 && !u2) return [l2.toLowerCase(), l1.toUpperCase()];
    if (!u1 && u2) return [l2.toUpperCase(), l1.toLowerCase()];
    return [l2, l1];
};
//Very easy but strange it is medium in leetcode
// https://leetcode.com/problems/reverse-words-in-a-string/description/?envType=study-plan-v2&envId=leetcode-75
var reverseVowels = function(str) {
    let s = [...str];
    let [left, right] = [0, s.length - 1];
    let i = 0;
    const regExp = new RegExp('a|e|i|o|u', 'gi');

    while (left < right) {
        let isLeft = s[left].match(regExp);
        let isRight = s[right].match(regExp);
        if (isLeft && isRight) {
            [s[left], s[right]] = swapLetterCases([s[left], s[right]]);
            left++;
            right--;
            continue;
        }
        if (!isLeft) {
            left++;
        }
        if (!isRight) {
            right--;
        }
    }
    return s.join('');
};


const reverseWords = function(s) {
    let res = [];
    let word = '';
    for (let i = 0; i < s.length; i++) {
        if (s[i] !== ' ') {
            word += s[i];
        }
        if ((s[i + 1] == ' ' && s[i] !== ' ') || (i == s.length - 1 && word)) {
            res.unshift(word);
            word = '';
        }
    }
    return res.join(' ');
};

//TODO Префиксные суммы - cупер крутая задача - повторить технику
// https://leetcode.com/problems/product-of-array-except-self/submissions/1648866565/?envType=study-plan-v2&envId=leetcode-75
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    const prefix = nums => {
        let [p, s] = [[1], [1]];
        for (let i = 0; i < nums.length; i++) {
            p.push(p[i] * nums[i]);
            s.unshift(s[0] * nums[nums.length - i - 1]);
        }
        return [p, s];
    };

var productExceptSelf = function(nums) {
    const [p, s] = prefix(nums);
    return nums.map((el, idx) => p[idx] * s[idx + 1]);
};


var productExceptSelf1 = function(nums) {
    let answers = [];

    let leftProduct = 1;
    for (let i = 0; i < nums.length; i++) {
        answers[i] = leftProduct;
        leftProduct *= nums[i];
    }
    console.log(answers, leftProduct);

    let rightProduct = 1;
    for (let i = nums.length - 1; i > -1; i--) {
        console.log('s', answers[i], rightProduct);
        answers[i] *= rightProduct;

        rightProduct *= nums[i];
    }
    // console.log(answers)

    return answers;
};



//

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function(nums) {
    let mid = nums.length - 2
    while(mid>=1 && mid<nums.length) {
        for (let i = mid + 1; i<nums.length;i++) {
            if(nums[i]>nums[mid]) {
                for (let j = mid - 1; j>=0;j--) {
                    if(nums[j]<nums[mid]) {
                        return true
                    }
                }
            }else {
                mid--
            }
        }
    }
    return false
};

//TODO еще раз - важно (закосячил)
// https://leetcode.com/problems/increasing-triplet-subsequence/?envType=study-plan-v2&envId=leetcode-75
var increasingTriplet = function(nums) {
    let first = Infinity;
    let second = Infinity;

    for (let num of nums) {
        if (num <= first) {
            first = num;           // обновляем минимальный элемент
        } else if (num <= second) {
            second = num;          // обновляем второй минимальный элемент, больше первого
        } else {
            return true;           // нашли третий элемент, больше первого и второго
        }
    }

    return false;
};


//TODO Норм задача, когда то видел ее на собесе - можно повторить
//https://leetcode.com/problems/string-compression/?envType=study-plan-v2&envId=leetcode-75
/**
 * @param {character[]} chars
 * @return {number}
 */


var compress = function(chars) {
    let count = 1,
        res = [];

    for (let i in chars) {
        let l = chars[i];
        let prev = chars[+i - 1];
        let next = chars[+i + 1];
        if (l !== prev && prev) {
            res.push(prev);
            if (count > 1 && res.push(...`${count}`.split(""))) count = 1;
        }
        if (l == prev) {
            count++;
        }
        if (next == undefined) {
            res.push(l);
            if (count > 1 && res.push(...`${count}`.split(""))) count = 1;
        }
    }
    chars.length = 0
    chars.push(...res.map(String))
    res.length = 0

    return chars.length
};
//TODO хорошая задачи на понимание сортирвки слиянием
// https://leetcode.com/problems/median-of-two-sorted-arrays/?envType=problem-list-v2&envId=divide-and-conquer
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    const merge = nums1.concat(nums2).sort((a,b)=>a-b);
    const length = merge.length;
    let median = 0
    if(length%2===0)
    {
        median = ((merge[(length/2)-1] + merge[((length/2)+1)-1])/2);
    }
    else{
        median = merge[((length+1)/2)-1];
    }
    return median
};


//TODO нужно попытаться решить shift или подобных методов ( повторить )
//https://leetcode.com/problems/move-zeroes/?envType=study-plan-v2&envId=leetcode-75

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let count = 0;
    let length = nums.length;
    for (let i = 0; i < length; i++) {
        const n = nums.shift();

        if (n === 0) {
            count++;
            continue;
        }
        nums.push(n);
    }
    nums.push(...Array(count).fill(0));
    return nums;
};

var moveZeroes = function(nums) {
    const l = nums.length;
    for (let i = 0; i < l; i++) {
        if (nums[i] == 0) continue;
        nums.push(nums[i]);
    }
    nums.splice(0, l);
    nums.push(...Array(l - nums.length).fill(0));
    return nums;
};


//TODO - тут техника двух указателей - запомнить ( это не я написал )
var moveZeroes = function(nums) {
    let lastNonZeroFoundAt = 0; // первый указатель
    for (let i = 0; i < nums.length; i++) { // второй указатель
        if (nums[i] !== 0) {
            nums[lastNonZeroFoundAt] = nums[i];
            lastNonZeroFoundAt++;
        }
    }
    for (let i = lastNonZeroFoundAt; i < nums.length; i++) {
        nums[i] = 0;
    }
};

//Легкое решил + python
// https://leetcode.com/problems/is-subsequence/?envType=study-plan-v2&envId=leetcode-75
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    let idx = 0, i = 0
    while(idx<s.length && i <t.length) {
        if(s[idx]==t[i])  idx++
        if(idx == s.length) return true
        i++
    }
    return s.length == 0
};

//TODO очень крутая задача обязательно повторить на два указателя
// https://leetcode.com/problems/container-with-most-water/description/?envType=study-plan-v2&envId=leetcode-75






