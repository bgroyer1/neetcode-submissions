class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let uniqueSet = Array.from(new Set(nums))
        if (uniqueSet.length !== nums.length) {
            return true
        }
        return false
    }
}

