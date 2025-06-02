

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

# TODO обязательно повторить наиболее интересная задача тут и хеш и два указателя
# https://leetcode.com/problems/max-number-of-k-sum-pairs/?envType=study-plan-v2&envId=leetcode-75
# class Solution:
#     def maxOperations(self, nums: List[int], k: int) -> int:
#         left = 0
#         right = len(nums) - 1
#         nums.sort()
#         res = 0
#         while left<right:
#             if nums[left] + nums[right] == k:
#                 del nums[right]
#                 del nums[left]
#                 res+=1
#                 # left+=1
#                 right-=2
#                 continue

#             if (nums[left] + nums[right]) > k:
#                 right-=1
#             else:
#                 left+=1
#         return res

# TODO обязательно повторить наиболее интересное решение
class Solution:
    def maxOperations(self, nums: List[int], k: int) -> int:
        needed = {}
        res = 0
        for el in nums:
            sub = k-el
            count = needed.get(el, 0)

            if count > 0:
                res+=1
                needed[el] -=1
                  # Отдельно проверяем, нужно ли удалить ключ
            if el in needed and needed.get(el, 0) == 0:
                del needed[el]

            # Если пары не было (count == 0), добавляем ожидаемый элемент
            if count == 0:
                needed[sub] = needed.get(sub, 0) + 1

        return res

# class Solution:
#     def maxOperations(self, nums: List[int], k: int) -> int:
#         needed = {}
#         res = 0
#         for el in nums:
#             if el in needed and needed[el] > 0:
#                 res += 1
#                 needed[el] -= 1
#                 if needed[el] == 0:
#                     del needed[el]
#             else:
#                 needed[k - el] = needed.get(k - el, 0) + 1

#         return res



