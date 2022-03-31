// 冒泡排序
function sortArray(n) {
  // 理想状态下，数组有多长就有多少轮比较
  // 实际情况是，数组有序区长度可能大于比较轮数，导致后面多次比较毫无意义
  let i = n.length - 1;
  while (i > 0) {
    // 最后一次交换的位置
    let lastChangeIndex = 0;
    // 每轮比较得到一个新的有序区
    // 下轮比较不需要再对有序区进行比较
    for (let j = 0; j < i; j++) {
      // 如果前一个元素大于后一个元素则交换位置
      if (n[j] > n[j + 1]) {
        let temp = n[j + 1];
        n[j + 1] = n[j];
        n[j] = temp;
        // 或者使用ES6的解构赋值交换值 [n[i], n[j]] = [n[j], n[i]]

        // 最后一次交换位置作为有序区的边界
        lastChangeIndex = j;
      }
    }
    i = lastChangeIndex;
  }

  return n;
}

module.exports = sortArray;
