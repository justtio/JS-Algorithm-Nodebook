function intersection(nums1, nums2) {
  let set = new Set();
  for (let i = 0; i < nums1.length; i++) {
    if(set.has(nums1[i])) continue;
    if(nums2.includes(nums1[i])) set.add(nums1[i]);
  }
  return [...set];
}

function intersection1(nums1, nums2) {
  return [...new Set(nums1)].filter(item => nums2.includes(item));
}

function intersection2(nums1, nums2) {
  //使用数组
  const arr = [];
  for(let i = 0; i < nums1.length; i++) {
    if(nums2.includes(nums1[i]) && !arr.includes(nums1[i])) {
      arr.push(nums1[i]);
    }
  }
  return arr;
}