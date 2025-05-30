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
