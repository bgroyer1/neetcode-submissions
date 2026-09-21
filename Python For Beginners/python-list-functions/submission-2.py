from typing import List # this is used to add type hints for List type

def get_sum(nums: List[int]) -> int:
    sum_of_list = 0
    for el in nums:
        sum_of_list += el
    return sum_of_list

def get_min(nums: List[int]) -> int:
    min_of_list = nums[0]
    for el in nums:
        if el < min_of_list:
            min_of_list = el
    return min_of_list

def get_max(nums: List[int]) -> int:
    max_of_list = nums[0]
    for el in nums:
        if el > max_of_list:
            max_of_list = el
    return max_of_list

# do not modify below this line
print(get_sum([1, 2, 3, 4, 5]))
print(get_sum([5, 4, 5, 6]))

print(get_min([7, 3, 4, 5]))
print(get_min([5, 4, 5, 6]))

print(get_max([7, 3, 4, 5]))
print(get_max([5, 4, 5, 6]))
