class NodeStruct {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class NodeList {
    constructor() {
        this.length = 0;  // 链表长度
        this.head = null; // 头节点
    }
    // 添加节点
    add(data) {
        let node = new NodeStruct(data);
        let currentNode = this.head;

        if (this.head == null) {
            this.head = node;
        } else {
            while (currentNode.next) {
                currentNode = currentNode.next;
            }
            currentNode.next = node;
        }
        this.length++;
    }
    // 打印结构
    print() {
        let currentNode = this.head;
        let res = '';

        if (this.head == null) {
            return console.log('链表为空');
        }

        do {
            res += (currentNode.data + '->')
            currentNode = currentNode.next;
        } while (currentNode)

        console.log(res);
    }
}

let list = new NodeList();
list.add(1);
list.add(2);
list.print();

