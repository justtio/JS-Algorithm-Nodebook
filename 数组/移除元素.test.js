// Test case 1: Removing element 2 from [1, 2, 3, 2, 4]
const nums1 = [1, 2, 3, 2, 4];
const val1 = 2;
const result1 = removeElement(nums1, val1);
console.log(result1); // Output: 3
console.log(nums1); // Output: [1, 3, 4]

// Test case 2: Removing element 0 from [0, 0, 0, 0, 0]
const nums2 = [0, 0, 0, 0, 0];
const val2 = 0;
const result2 = removeElement(nums2, val2);
console.log(result2); // Output: 0
console.log(nums2); // Output: [0, 0, 0, 0, 0]

// Test case 3: Removing element 5 from [1, 2, 3, 4]
const nums3 = [1, 2, 3, 4];
const val3 = 5;
const result3 = removeElement(nums3, val3);
console.log(result3); // Output: 4
console.log(nums3); // Output: [1, 2, 3, 4]