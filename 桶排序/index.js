const quickSort = require("../快速排序/index");
// 桶排序
function bucketSort(array) {
  // 获取最小值
  let min = Math.min(...array);
  // 获取最大值
  let max = Math.max(...array);
  // 假设桶区间为2
  let size = 3;
  // 计算桶的数量
  let count = Math.floor((max - min) / size) + 1;
  let buckets = [];
  for (let i = 0; i < count; i++) {
    buckets.push([]);
  }
  // 根据偏移量将数据插入到相应的桶中
  for (let v of array) {
    let num = Math.floor((v - min) / size);
    buckets[num].push(v);
  }
  // 用快速排序对每个桶进行局部排序
  let result = [];
  for (bucket of buckets) {
    result.push(...quickSort(bucket));
  }
  return result;
}

module.exports = bucketSort
