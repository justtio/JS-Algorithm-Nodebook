//物品
class Item {
  constructor(w, v) {
    this.w = w;
    this.v = v;
  }
}

function fractionalKnapsack(wgt, val, cap) {
  const items = wgt.map((w, i) => new Item(w, val[i]));
  items.sort((a, b) => b.v / b.w - a.v / a.w);
  let res = 0;
  for(const item of items) {
    if(item.w <= cap) {
      res += item.v;
      cap -= item.w;
    }else {
      res += (item.v / item.w) * cap;
      break;
    }
  }
  return res;
}
