//下面这个解法在忽略了版本号中的0的情况下是正确的，但是如果版本号中有0的话，就会出现问题
//例如比较2.7.069与2.7.07
function compareVersion (v1, v2) {
    const v1Arr = v1.split('.');
    const v2Arr = v2.split('.');
    const len = Math.max(v1Arr.length, v2Arr.length);
    for(let i = 0; i < len; i++) {
        const v1Num = Number(v1Arr[i]) || 0;
        const v2Num = Number(v2Arr[i]) || 0;

        if(v1Num > v2Num) return 1;
        if(v1Num < v2Num) return -1;
    }
    return 0;
}

//实用版本，不忽略先导0，版本长度不一，再短值补0
function compareVersion1 (v1, v2) {
    const v1Arr = v1.split('.');
    const v2Arr = v2.split('.');
    const len = Math.max(v1Arr.length, v2Arr.length);
    for(let i = 0; i < len; i++) {
        let v1Num = v1Arr[i] || 0
        let v2Num = v2Arr[i] || 0;

        //比较v1Num和v2Num的长度，在短的后面补0
        if(v1Num.length > v2Num.length) {
            v2Num = v2Num.padEnd(v1Num.length, '0');
        }else {
            v1Num = v1Num.padEnd(v2Num.length, '0');
        }

        if(v1Num > v2Num) return 1;
        if(v1Num < v2Num) return -1;
    }
    return 0;
}
