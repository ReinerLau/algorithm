// 快速排序
function quickSort(array, start = 0, end = array.length - 1) {
  // 递归出口
  if (end - start < 1) {
    return array;
  }
  // 分界点位置
  let pivotIndex = partition(array, start, end);
  // 递归处理左边比分界点小的元素
  quickSort(array, start, pivotIndex - 1);
  // 递归处理左边比分界点大的元素
  quickSort(array, pivotIndex + 1, end);
  return array;
}

function partition(array, start, end) {
  // 需要交换的位置
  let j = start;
  // 找到分界点元素
  let pivot = array[end];
  for (let i = start; i <= end; i++) {
    // 比分界点小，往数组前面进行交换
    if (array[i] <= pivot) {
      let temp = array[i];
      array[i] = array[j];
      array[j] = temp;
      j++;
      /// 也可以使用ES6的解构赋值进行交换
    }
  }
  // 分界点位置
  return j - 1;
}

module.exports = quickSort;
