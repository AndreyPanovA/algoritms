

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


# //TODO Решить обязательно еще раз сам решил но решение много жрало по памяти решал на питоне
# // https://leetcode.com/problems/removing-stars-from-a-string/?envType=study-plan-v2&envId=leetcode-75
class Solution:
    def removeStars(self, s: str) -> str:
        stack = []
        for el in s:
            if el=="*":
                if stack:
                    stack.pop()
            else:
                stack.append(el)

        return "".join(stack)

# TODO - жесткая обязательно повторить
# https://leetcode.com/problems/asteroid-collision/description/?envType=study-plan-v2&envId=leetcode-75
class Solution:
    def asteroidCollision(self, asteroids: List[int]) -> List[int]:
        s = []
        idx = len(asteroids) - 1
        bomb = []
        while idx>=0:
            last = asteroids[idx]
            if len(bomb) > 0 and last < 0:
                idx-=1
                bomb.append(last)
                # bomb.insert(0, last)
                continue
            if len(bomb)>0 and last>0:
                if abs(bomb[len(bomb) - 1]) > last:
                    idx -= 1
                    continue
                elif abs(bomb[len(bomb) - 1])==last:
                    bomb.pop()
                    idx -= 1
                    continue
                else:
                    bomb.pop()
                    continue

            if len(bomb)==0  and last >= 0:
                s.append(last)
            elif len(bomb)==0 and last < 0:
                bomb.append(last)
            elif len(bomb)>0 and last < 0:
                # если уже есть bomb и текущий last < 0, то предыдущий bomb не столкнется с ним,
                # поэтому добавляем предыдущий bomb и обновляем bomb
                s.append(bomb.pop())
                bomb.append(last)
            idx -= 1

        s.extend(bomb)
        return s[::-1]

# TODO Жесткая задача  - заучить обязательно
# https://leetcode.com/problems/decode-string/description/?envType=study-plan-v2&envId=leetcode-75
class Solution:
    def decodeString(self, s: str) -> str:
        stack = []
        num = 0
        for l in s:
            if l.isdigit():
                num = num * 10 + int(l)
            elif l=="[":
                stack.append(num)
                stack.append(l)
                num = 0
            elif l=="]":
                s1 = ''
                while stack and stack[-1]!="[":
                    s1 = stack.pop() + s1

                stack.pop()
                # stack.append(stack.pop() * s1)
                stack.append(s1 * stack.pop())
            else:
                stack.append(l)

        return "".join(stack)


# Средне  но интересно
# https://leetcode.com/problems/determine-if-two-strings-are-close/?envType=study-plan-v2&envId=leetcode-75
#
# class Solution:
#     def closeStrings(self, word1: str, word2: str) -> bool:
#         if len(word1)!=len(word2):
#             return False
#
#         hash1 = {}
#         hash2 = {}
#
#         for i in range(len(word1)):
#             l1 = word1[i]
#             l2 = word2[i]
#
#             hash1[l1] = hash1.get(l1, 0) + 1
#             hash2[l2] = hash2.get(l2, 0) + 1
#
#         if set(hash1.keys()) != set(hash2.keys()):
#             return False
#         if sorted(hash1.values()) != sorted(hash2.values()):
#             return False
#         # for v1, v2 in zip(sorted(list(hash1.values())), sorted(list(hash2.values()))):
#         #     if v1 != v2:
#         #         return False
#
#         return True
#

# Интересная задача среднего уровня есть TODO есть крутой подход метод зайца и черепахи через два указателя в цикле while для поиска середины 2 вперед, 1 вперед
# https://leetcode.com/problems/delete-the-middle-node-of-a-linked-list/submissions/1661224111/?envType=study-plan-v2&envId=leetcode-75




# TODO обязательно повторить
# https://leetcode.com/problems/reverse-linked-list/?envType=study-plan-v2&envId=leetcode-75
# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def reverseList(self, head: Optional[ListNode]) -> Optional[ListNode]:
        revHead = None
        current = head
        while current:
            cur = current.next
            current.next = revHead
            revHead = current
            current = cur
        return revHead




# TODO разобраться и повторить
# https://leetcode.com/problems/odd-even-linked-list/description/?envType=study-plan-v2&envId=leetcode-75




# Интересная задача
# https://leetcode.com/problems/maximum-twin-sum-of-a-linked-list/?envType=study-plan-v2&envId=leetcode-75

# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def pairSum(self, head: Optional[ListNode]) -> int:
        stack = []
        current = head
        max_sum = 0
        while current:
            stack.append(current.val)
            current = current.next

        for i in range(len(stack) // 2):
            twin_sum = stack[i] + stack[len(stack) - 1 - i]

            max_sum = max(max_sum, twin_sum)

        return max_sum


# TODO Повторить для правктики в рекурсию и обратно

# https://leetcode.com/problems/maximum-depth-of-binary-tree/?envType=study-plan-v2&envId=leetcode-75

lass Solution:
    def maxDepth(self, root: Optional[TreeNode]) -> int:
        if root is None:
            return 0

        stack = [[root, 1]]
        maxCount = 1
        while len(stack) > 0:
            node, count = stack.pop()

            if node:
                maxCount = max(count, maxCount)
                stack.append([node.left, count + 1])
                stack.append([node.right, count + 1])
        return maxCount

    # def maxDepth(self, root: Optional[TreeNode]) -> int:
    #     def dfs(root):
    #         if root is None:
    #             return 0

    #         return 1 + max(dfs(root.left), dfs(root.right))

    #     return dfs(root)



# Просмотреть но интересно
# https://leetcode.com/problems/leaf-similar-trees/?envType=study-plan-v2&envId=leetcode-75
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def leafSimilarRecursive(self, root1: Optional[TreeNode], root2: Optional[TreeNode]) -> bool:
        def dig(root, stack):
            if not root:
                return stack
            if root.left is None and root.right is None:
                stack.append(root.val)
            else:
                dig(root.left, stack)
                dig(root.right, stack)
            return stack

        return dig(root1, [])== dig(root2, [])

    def leafSimilar(self, root1: Optional[TreeNode], root2: Optional[TreeNode]) -> bool:
        def dfs(root):
            stack = [root]
            res = []
            while len(stack) > 0:
                el = stack.pop()
                if not el:
                    continue
                if el.left is None and el.right is None:
                    res.append(el.val)
                else:
                    stack.append(el.left)
                    stack.append(el.right)
            return res

        return dfs(root1) == dfs(root2)






