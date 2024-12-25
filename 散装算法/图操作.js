//基于邻接矩阵实现的无向图类
class GraphAdjMat {
  vertices; // 顶点列表，元素代表顶点值，索引代表顶点索引
  adjMat; // 邻接矩阵，行列索引对应顶点索引

  constructor() {
    this.vertices = [];
    this.adjMat = [];
    //添加顶点
    for(const val of vertices) {
      this.addVertex(val);
    }
    //添加边，edges元素代表顶点索引，即对应vertices元素索引
    for(const e of edges) {
      this.addEdge(e[0], e[1]);
    }
  }

  //获取顶点数量
  size() {
    return this.vertices.length;
  }

  //添加顶点
  addVertex(val) {
    const n = this.size();
    //向顶点列表中添加新顶点的值
    this.vertices.push(val);
    //在邻接矩阵中添加一行
    const newRow = [];
    for(let j = 0; j < n; j++) {
      newRow.push(0);
    }
    this.adjMat.push(newRow);
    //在邻接矩阵中添加一列
    for(const row of this.adjMat) {
      row.push(0);
    }
  }

  //删除顶点
  removeVertex(val) {
    if(index >= this.size()) {
      throw new RangeError('Index out of range');
    }
    //在顶点列表中移除索引index的顶点
    this.vertices.splice(index, 1);

    //在邻接矩阵中删除索引index的行
    this.adjMat.splice(index, 1);
    //在邻接矩阵中删除索引index的列
    for(const row of this.adjMat) {
      row.splice(index, 1);
    }
  }

  //添加边
  // 参数i, i对应vertices元素索引
  addEdge(i, j) {
    //索引越界与相等处理
    if(i < 0 || j < 0 || i >= this.size() || j >= this.size() || i === j) {
      throw new RangeError('Index out of range');
    }
    //在无向图中，邻接矩阵关于主对角线对称，满足（i,j) = (j,i)
    this.adjMat[i][j] = 1;
    this.adjMat[j][i] = 1;
  }

  //删除边
  removeEdge(i, j) {
    if(i < 0 || j < 0 || i >= this.size() || j >= this.size() || i === j) {
      throw new RangeError('Index out of range');
    }
    this.adjMat[i][j] = 0;
    this.adjMat[j][i] = 0;
  }

  print() {
    console.info('顶点列表：', this.vertices);
    console.info('邻接矩阵：', this.adjMat);
  }
}

//基于邻接表实现的无向图类
class GraphAdjList {
  // 邻接表， key: 顶点，value: 该顶点的所有邻接顶点
  adjList;
  
  constructor(edges) {
    this.adjList = new Map();
    //添加所有顶点和边
    for(const edge of edges) {
      this.addVertex(edge[0]);
      this.addVertex(edge[1]);
      this.addEdge(edge[0], edge[1]);
    }
  }

  size() {
    return this.adjList.size;
  }

  //添加边
  addEdge(vet1, vet2) {
    if(
      !this.adjList.has(vet1) ||
      !this.adjList.has(vet2) ||
      vet1 === vet2
    ) {
      throw new Error('Illegal Arguments');
    }
    // 添加边vet1 - vet2
    this.adjList.get(vet1).push(vet2);
    this.adjList.get(vet2).push(vet1);
  }

  //删除边
  removeEdge(vet1, vet2) {
    if(
      !this.adjList.has(vet1) ||
      !this.adjList.has(vet2) ||
      vet1 === vet2
    ) {
      throw new Error('Illegal Arguments');
    }

    //删除边vet1 - vet2
    this.adjList.get(vet1).splice(this.adjList.get(vet1).indexOf(vet2), 1);
    this.adjList.get(vet2).splice(this.adjList.get(vet2).indexOf(vet1), 1);
  }

  //添加顶点
  addVertex(vet) {
    if(this.adjList.has(vet)) return;
    //在邻接表中添加一个新链表
    this.adjList.set(vet, []);
  }

  //删除顶点
  removeVertex(vet) {
    if(!this.adjList.has(vet)) {
      throw new Error('Illegal Arguments');
    }
    //在邻接表中删除顶点 vet对应的链表
    this.adjList.delete(vet);
    // 遍历其他顶点的链表，删除所有包含vet的边
    for(const set of this.adjList.values()) {
      const index = set.indexOf(vet);
      if(index > -1) {
        set.splice(index, 1);
      }
    }
  }

  //打印邻接表
  print() {
    for(const [key, value] of this.adjList) {
      const tmp = [];
      for(const vertex of value) {
        tmp.push(vertex.val);
      }
      console.info(key.val + ' -> ' + tmp.join(' '));
    }
  }
}