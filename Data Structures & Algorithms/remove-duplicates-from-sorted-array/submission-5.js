class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    removeDuplicates(nums) {
        let left = 0;
        let right = 1;

        while (left < nums.length) {
            nums[left] === nums[right] 
            ? nums.splice(left, 1)
            : (left++, right++)
        }
        return nums.length
    }
}
