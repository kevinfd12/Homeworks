const nums = [2, 14, 2, 11, 14, 22, 18, 22, 22];

// function containsDuplicate(nums) {
//   nums = nums.sort();
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] == nums[i + 1]) {
//       return true;
//     }
//   }
//   return false;
// }

function containsDuplicate(nums) {
  const [...set] = new Set(nums);

  return nums.length !== set.length;
}

console.log(containsDuplicate(nums));
