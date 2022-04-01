const quickSort = require("../index");
const Mock = require("mockjs");
const _ = require("lodash");

describe("快速排序", () => {
  test("[]", () => {
    const nums = [];
    expect(quickSort(nums)).toEqual([]);
  });

  test("[1]", () => {
    const nums = [1];
    expect(quickSort(nums)).toEqual([1]);
  });

  test("[2,1]", () => {
    const nums = [2, 1];
    expect(quickSort(nums)).toEqual([1, 2]);
  });

  test("[1,2,3]", () => {
    const nums = [1, 2, 3];
    expect(quickSort(nums)).toEqual([1, 2, 3]);
  });

  test("[5,2,3,1]", () => {
    const nums = [5, 2, 3, 1];
    expect(quickSort(nums)).toEqual([1, 2, 3, 5]);
  });

  test("[5,1,1,2,0,0]", () => {
    const nums = [5, 1, 1, 2, 0, 0];
    expect(quickSort(nums)).toEqual([0, 0, 1, 1, 2, 5]);
  });

  test("40000条数据", () => {
    // 有序
    const nums = Mock.mock("@range(40000)");
    // 无序
    const newNums = _.shuffle(nums);
    expect(quickSort(newNums)).toEqual(nums);
  });
});
