// 返回目标值的下坐标数组
function towSum (nums, target) {
    const map = new Map();
    for (let i = 0; i < nums.length; i++) {
        const another = target - nums[i];
        // 如果map中有another,则返回map中another的下标和当前的下标
        if(map.has(another)) {
            return [map.get(another), i];
        }
        map.set(nums[i], i);
    }
    return [];
}