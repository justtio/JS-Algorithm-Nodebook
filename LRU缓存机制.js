class LRUCache {
    constructor(capacity) {
        this.capacity = capacity;
        this.cache = new Map();
    }

    get(key) {
        // 如果缓存中有这个key，就把它删除再重新set一遍，这样就能保证它是最新的
        if(this.cache.has(key)) {
            let temp = this.cache.get(key);
            this.cache.delete(key);
            this.cache.set(key, temp);
            return temp;
        }
        // 如果没有这个key，就返回-1
        return -1;
    }

    put(key, value) {
        // 如果缓存中有这个key，就把它删除再重新set一遍，这样就能保证它是最新的
        // 如果缓存中没有这个key，就判断缓存是否已满，满了就删除第一个key
        // 最后再set这个key
        if(this.cache.has(key)) {
            this.cache.delete(key);
        }else if(this.cache.size >= this.capacity) {
            this.cache.delete(this.cache.keys().next().value);
        }

        this.cache.set(key, value);
    }
}

