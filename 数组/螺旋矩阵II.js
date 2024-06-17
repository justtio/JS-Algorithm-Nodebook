// 判断四个边界值，然后按照顺时针的方向进行遍历
function generateMatrix(n) {
    // 创建一个n*n的二维数组
    let res = Array.from({ length: n }, () => []);
    let top = 0, bottom = n - 1, left = 0, right = n - 1;
    // 从1开始填充
    let num = 1, tar = n * n;
    // 顺时针遍历
    while (num <= tar) {
        // 从左到右
        for (let i = left; i <= right; i++) {
            res[top][i] = num++;
        }
        top++;
        // 从上到下
        for (let i = top; i <= bottom; i++) {
            res[i][right] = num++;
        }
        right--;
        // 从右到左
        for (let i = right; i >= left; i--) {
            res[bottom][i] = num++;
        }
        bottom--;
        // 从下到上
        for (let i = bottom; i >= top; i--) {
            res[i][left] = num++;
        }
        left++;
    }
    return res;
}
const n = 3;
generateMatrix(n); // Output: [[1, 2, 3], [8, 9, 4], [7, 6, 5]]