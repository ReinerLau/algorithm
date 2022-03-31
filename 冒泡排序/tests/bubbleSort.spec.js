const bubbleSort = require("../index");
const Mock = require('mockjs')
const _ = require('lodash')

describe("冒泡排序", () => {
  test("[]", () => {
    const nums = [];
    expect(bubbleSort(nums)).toEqual([]);
  });

  test("[1]", () => {
    const nums = [1];
    expect(bubbleSort(nums)).toEqual([1]);
  });

  test("[2,1]", () => {
    const nums = [2, 1];
    expect(bubbleSort(nums)).toEqual([1, 2]);
  });

  test("[1,2,3]", () => {
    const nums = [1, 2, 3];
    expect(bubbleSort(nums)).toEqual([1, 2, 3]);
  });

  test("[5,2,3,1]", () => {
    const nums = [5, 2, 3, 1];
    expect(bubbleSort(nums)).toEqual([1, 2, 3, 5]);
  });

  test("[5,1,1,2,0,0]", () => {
    const nums = [5, 1, 1, 2, 0, 0];
    expect(bubbleSort(nums)).toEqual([0, 0, 1, 1, 2, 5]);
  });

  test("大数据", () => {
    // 有序
    const nums = Mock.mock('@range(4000)')
    // 无序
    const newNums = _.shuffle(nums)
    expect(bubbleSort(newNums)).toEqual(nums);
  });
});
