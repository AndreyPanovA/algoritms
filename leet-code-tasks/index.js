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