function quickSort(n) {
  // 递归出口
  if (n.length < 2) {
    return n;
  }
  // 找到分界点元素
  let pivot = n[n.length - 1];
  // 拆分成左右两个数组
  let left = n.filter((num, i) => num <= pivot && i != n.length - 1);
  let right = n.filter((num) => num > pivot);
  // 继续递归拆分合并
  return [...quickSort(left), pivot, ...quickSort(right)];
  // 或者使用concat方法拼接数组
}

module.exports = quickSort;
