// 动态规划初见，最大子数组和
function maxSubArray(nums) {
    let max = nums[0];
    let sum = 0;
    for (let num of nums) {
        if (sum > 0) {
            sum += num;
        } else {
            sum = num;
        }
        max = Math.max(max, sum);
    }
    return max;
}

//分治法
function divideAndConquer(arr, left, right) {
    if (left === right) {
        return arr[left];
    }

    let mid = Math.floor((left + right) / 2);

    let leftMax = divideAndConquer(arr, left, mid);
    let rightMax = divideAndConquer(arr, mid + 1, right);

    let leftCrossMax = -Infinity;
    let rightCrossMax = -Infinity;
    let sum = 0;

    for (let i = mid; i >= left; i--) {
        sum += arr[i];
        leftCrossMax = Math.max(leftCrossMax, sum);
    }

    sum = 0;

    for (let i = mid + 1; i <= right; i++) {
        sum += arr[i];
        rightCrossMax = Math.max(rightCrossMax, sum);
    }

    return Math.max(leftMax, rightMax, leftCrossMax + rightCrossMax);
}

function maxSubarraySum(arr) {
    if (!arr || arr.length === 0) {
        return 0;
    }

    return divideAndConquer(arr, 0, arr.length - 1);
}