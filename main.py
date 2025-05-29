def quicksort(arr):
    if len(arr) <= 1:
        return arr
    pivot = arr[0]
    
    left = [x for x in arr[1:] if x <= pivot]
    right = [x for x in arr[1:] if x > pivot]
    return quicksort(left) + [pivot] + quicksort(right)



arr = [1,-1,12,100,14]
# print(quicksort(arr))
def merge_sort(arr):
    if len(arr) <2:
        return arr
    
    result = []
    mid = len(arr) // 2
    
    left = merge_sort(arr[:mid])
    right = merge_sort(arr[mid:])
    
    while len(left) and len(right):
        if(left[0]>=right[0]):
            result.append(left.pop())
            continue
        result.append(right.pop())
        
    result.extend(left)
    result.extend(right)
    return result

print(merge_sort([99, 78, 38, 62, 74, 6, 25, 32]))