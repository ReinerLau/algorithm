const bubbleSort = require("../冒泡排序/index");

describe("冒泡排序", () => {
  test("[5,2,3,1]", () => {
    const nums = [5, 2, 3, 1];
    expect(bubbleSort(nums)).toEqual([1, 2, 3, 5]);
  });

  test("[5,1,1,2,0,0]", () => {
    const nums = [5, 1, 1, 2, 0, 0];
    expect(bubbleSort(nums)).toEqual([0, 0, 1, 1, 2, 5]);
  });

  test("[1,2,3]", () => {
    const nums = [1, 2, 3];
    expect(bubbleSort(nums)).toEqual([1, 2, 3]);
  });
});
