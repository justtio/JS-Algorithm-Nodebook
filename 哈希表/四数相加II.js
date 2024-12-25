function fourSumCount(nums1, nums2, nums3, nums4) {
  let map = new Map();
  let count = 0;
  for(let i = 0; i < nums1.length; i++) {
    for(let j = 0; j < nums2.length; j++) {
      map.set(nums1[i] + nums2[j], map.get(nums1[i] + nums2[j]) + 1 || 1);
    }
  }
  for(let i = 0; i < nums3.length; i++) {
    for(let j = 0; j < nums4.length; j++) {
      if(map.has(-nums3[i] - nums4[j])) {
        count += map.get(-nums3[i] - nums4[j]);
      }
    }
  }
  return count;
}

function fourSumCount1(nums1, nums2, nums3, nums4) {
  let map = new map();
  let count = 0;

  for(let num1 of nums1) {
    for(let num2 of nums2) {
      let sum = num1 + num2;
      map.set(sum, (map.get(sum) || 0) + 1);
    }
  }

  for(let num3 of nums3) {
    for(let num4 of nums4) {
      let target = -(num3 + num4);
      if(map.has(target)) {
        count += map.get(target);
      }
    }
  }
  return count;
}