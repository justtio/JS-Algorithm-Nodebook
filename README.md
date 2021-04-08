# JS-Algorithm-Nodebook
小李同学的算法刷题笔记及日常

## item1 两数之和

``` 
输入：nums = [2,7,11,15], target = 9
输出：[0,1]
解释：因为 nums[0] + nums[1] == 9 ，返回 [0, 1] 。
```

## 解题思路
1. 创建一个map
2. for循环遍历nums数组
3. 用target减nums[i]，以计算哪个数能跟当前的数字相加得到target
4. 检查map里有没有这个数，如果有则返回结果，如果没有则把nums[i]当作key，i当作value放入map中

## 代码展示
```
var towSum = function(nums, target){
  const map = new Map();
  for(let i = 0; i < nums.length; i++){
    const complement = target - nums[i];
    
    if(map.has(complement)){
      return [map.get(complement), i];
    }else{
      return map(nums[i], i);
    }
   }
   return [];
}

```


