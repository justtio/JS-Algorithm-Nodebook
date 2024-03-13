//单链表
function List()  {
    let Node = function (element) {
        this.element = element;
        this.next = null;
    }
    let head = null;
    let length = 0;

    // 操作
    this.getList = function () {
        return head;
    }
    this.search = function(element) {
        // 从头节点开始遍历
        let current = head;
        // 遍历链表
        while(current) {
            if(current.element === element) {
                return current;
            }
            current = current.next;
        }
        return null;

        //另一种查询，返回boolean
        // while(current) {
        //     if(current.element === element) {
        //         return true;
        //     }
        //     current = current.next;
        // }
        // return false;
    }
    this.append = function (element) {
        // 创建节点
        let node = new Node(element);
        // 临时节点
        let current;
        // 如果head为空，说明是空链表
        if(!head) {
            head = node;
        }else {
            // 从头节点开始遍历
            current = head;
            while(current.next) {
                current = current.next;
            }
            // 找到最后一项，将其next赋为node，建立链接
            current.next = node;
        }
        length++;
    }
    this.insert = function (position, element) {
        // 检查越界值
        if(position >= 0 && position <= length) {
            let node = new Node(element);
            let current = head;
            let previous;
            let index = 0;
            if(position === 0) {
                node.next = current;
                head = node;
            }else {
                while(index++ < position) {
                    previous = current;
                    current = current.next;
                }
                node.next = current;
                previous.next = node;
            }
            length++;
            return true;
        } else {
            return false;
        }
    }
    this.remove = function (element) {
        // 从头节点开始遍历
        let current = head, previous;
        while(current) {
            // 找到了就删除
            if(current.element === element) {
                // 如果是第一个节点
                if(!previous) {
                    // 把头节点指向下一个节点
                    head = current.next;
                }else {
                    // 把上一个节点的next指向下一个节点
                    previous.next = current.next;
                }
                length--;
                return current.element;
            }
            // 如果没找到，就继续往下找
            previous = current;
            current = current.next;
        }
    }
    this.isEmpty = function () {
        return length === 0;
    }
    this.size = function () {
        return length;
    }
}

//双链表
function DoublyLinkedList() {
    let Node = function (element) {
        this.element = element;
        this.next = null;
        this.prev = null;
    }

    let head = null;
    let tail = null;
    let length = 0;

    this.search = function (element) {
        let current = head;
        while(current) {
            if(current.element === element) {
                return current;
            }
            current = current.next;
        }
        return null;
    }
    this.insert = function (position, element) {
        if(position >= 0 && position <= length) {
            let node = new Node(element);
            let current = head;
            let previous;
            let index = 0;
            if(position === 0) {
                if(!head) {
                    head = node;
                    tail = node;
                }else {
                    node.next = current;
                    current.prev = node;
                    head = node;
                }
            }else if(position === length) {
                current = tail;
                current.next = node;
                node.prev = current;
                tail = node;
            }else {
                while(index++ < position) {
                    previous = current;
                    current = current.next;
                }
                node.next = current;
                previous.next = node;

                current.prev = node;
                node.prev = previous;
            }
            length++;
            return true;
        }else {
            return false;
        }
    }

    this.removeAt = function (position) {
        if(position > -1 && position < length) {
            let current = head;
            let previous;
            let index = 0;
            if(position === 0) {
                head = current.next;
                if(length === 1) {
                    tail = null;
                }else {
                    head.prev = null;
                }
            }else if(position === length - 1) {
                current = tail;
                tail = current.prev;
                tail.next = null;
            }else {
                while(index++ < position) {
                    previous = current;
                    current = current.next;
                }
                previous.next = current.next;
                current.next.prev = previous;
            }
            length--;
            return current.element;
        }else {
            return null;
        }
    }

    this.isEmpty = function () {
        return length === 0;
    }

    this.size = function () {
        return length;
    }
}

// 循环链表
function CircularLinkedList() {
    let Node = function (element) {
        this.element = element;
        this.next = null;
    }

    let head = null;
    let length = 0;

    this.search = function (element) {
        let current = head;
        while(current) {
            if(current.element === element) {
                return current;
            }
            current = current.next;
            if(current === head) {
                break;
            }
        }
        return null;
    }

    this.insert = function (position, element) {
        if(position >= 0 && position <= length) {
            let node = new Node(element);
            let current = head;
            let previous;
            let index = 0;
            if(position === 0) {
                if(!head) {
                    head = node;
                    node.next = head;
                }else {
                    node.next = current;
                    while(current.next !== head) {
                        current = current.next;
                    }
                    head = node;
                    current.next = head;
                }
            }else {
                while(index++ < position) {
                    previous = current;
                    current = current.next;
                }
                node.next = current;
                previous.next = node;
            }
            length++;
            return true;
        }else {
            return false;
        }
    }

    this.removeAt = function (position) {
        if(position > -1 && position < length) {
            let current = head;
            let previous;
            let index = 0;
            if(position === 0) {
                if(length === 1) {
                    head = null;
                }else {
                    let removed = head;
                    while(current.next !== head) {
                        current = current.next;
                    }
                    head = head.next;
                    current.next = head;
                    current = removed;
                }
            }else {
                while(index++ < position) {
                    previous = current;
                    current = current.next;
                }
                previous.next = current.next;
            }
            length--;
            return current.element;
        }else {
            return null;
        }
    }

    this.isEmpty = function () {
        return length === 0;
    }

    this.size = function () {
        return length;
    }
}