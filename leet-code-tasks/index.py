

class Solution:
# //Легкое решил + js
# // https://leetcode.com/problems/is-subsequence/?envType=study-plan-v2&envId=leetcode-75
    def isSubsequence(self, s: str, t: str) -> bool:
        idx = 0
        for i in range(len(t)):
            if idx<=len(s) - 1 and s[idx]==t[i]:
               idx+=1
        return bool(idx==len(s))



# TODO очень крутая задача обязательно повторить на два указателя
# https://leetcode.com/problems/container-with-most-water/description/?envType=study-plan-v2&envId=leetcode-75
class Solution:
    def maxArea(self, height: List[int]) -> int:
        w = len(height)
        left = 0
        right = len(height) - 1
        res = 0
        while left < right:
            w = right - left
            m = min(height[left], height[right])
            s = w * m
            if res<s:
                res = s
            if height[left]<=height[right]:
                left+=1
                continue
            if height[right]<height[left]:
                right-=1
        return res