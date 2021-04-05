const MoveZeros = (nums) => {
    for (let i = nums.length - 1; i >= 0; i--) {
        if (nums[i] == 0) {
            a = nums.splice(i, 1)
            nums.push(...a)
        }
    }
    console.log(nums)
}

let testCase = [1, 0, 0, 1]
MoveZeros(testCase)
console.log(testCase)
