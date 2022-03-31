// 冒泡排序
function sortArray(n) {
  // 数组有多长就有多少轮比较
  for (let i = 0; i < n.length; i++) {
    // 该轮比较是否出现排序
    let isSorted = false;
    // 每轮比较得到一个新的有序区
    // 下轮比较不需要再对有序区进行比较
    for (let j = 0; j < n.length - 1 - i; j++) {
      // 如果前一个元素大于后一个元素则交换位置
      if (n[j] > n[j + 1]) {
        let temp = n[j + 1];
        n[j + 1] = n[j];
        n[j] = temp;
        // 或者使用ES6的解构赋值交换值 [n[i], n[j]] = [n[j], n[i]]

        // 出现排序
        isSorted = true;
      }
    }
    // 该轮比较未出现排序，证明该数组已经有序，不再需要下轮比较
    if (!isSorted) {
      break;
    }
  }

  return n;
}

module.exports = sortArray;
