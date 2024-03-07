// 所有的回溯问题都可以抽象成树形结构，树的每一层代表一个决策，每个节点可以有多个分支，代表不同的选择。
//树结构是前提基础
function permute(arr) {
    let res = [];
    function dfs(path, set) {
        if (path.length === arr.length) {
            res.push(path);
            return; 
        }
        for (let i = 0; i < arr.length; i++) {
            if (set.has(i)) continue;
            set.add(i);
            dfs(path.concat(arr[i]), set);
            set.delete(i);
        }
    }
    dfs([], new Set());
    return res;
}