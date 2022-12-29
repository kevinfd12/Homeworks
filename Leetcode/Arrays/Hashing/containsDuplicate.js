nums = [1, 2, 3, 1];

function containsDuplicate(nums) {
  nums = nums.sort();
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == nums[i + 1]) {
      return true;
    }
  }
  return false;
}

// function containsDuplicate(nums) {
//     nums = nums.sort()
//     for(let i=0; i < nums.length; i++) {
//         if (nums[i] == nums[i+1]) {
//             return true
//         }
//             return false
//         }
//  Why does moving false into the for loop make it fail?
//     }
