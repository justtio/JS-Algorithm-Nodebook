// 不能生成新数组，改变原num1
// 可以考虑双指针
function merge(num1, m, num2, n) {
    //此处也可以用splice方法,但是性能没有for循环好
    //nums1.splice(m, nums1.length - m, ...nums2);
    for(let i = 0; i < n; i++) {
        num1[m + i] = num2[i]
    }
    num1.sort((a, b) => a - b)
};

//双指针
//利用num1与num2已经有序的特点,从后往前比较,将大的数放到num1的最后
//这样就不用移动num1的元素了
//时间复杂度O(m + n)
function merge1(num1, m, num2, n) {
    let len1 = m - 1,
        len2 = n - 1,
        len = m + n - 1
    
        while(len2 >= 0) {
            if(len1 < 0) {
                num1[len--] = num2[len2--]
                continue
            }
            num1[len--] = num1[len1] >= num2[len2] ? num1[len1--] : num2[len2--]
        }
};