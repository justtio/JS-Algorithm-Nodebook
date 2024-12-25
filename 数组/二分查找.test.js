// Test case 1: Searching for element 3 in [1, 2, 3, 4, 5]
const nums1 = [1, 2, 3, 4, 5];
const target1 = 3;
const result1 = binarySearch1(nums1, target1);
console.log(result1); // Output: 2

// Test case 2: Searching for element 6 in [1, 2, 3, 4, 5]
const nums2 = [1, 2, 3, 4, 5];
const target2 = 6;
const result2 = binarySearch1(nums2, target2);
console.log(result2); // Output: -1

// Test case 3: Searching for element 1 in [1, 2, 3, 4, 5]
const nums3 = [1, 2, 3, 4, 5];
const target3 = 1;
const result3 = binarySearch1(nums3, target3);
console.log(result3); // Output: 0