import { describe, expect, test } from "@jest/globals";
import getNumberIntervals from "./getNumberIntervals";

describe("Getting number intervals", () => {
  test("Overlap 6-8 and 17, not include 0-4 and 12-13", () => {
    expect(getNumberIntervals([[6, 11], [5, 8], [17, 20], [7, 7], [14, 17]])).toStrictEqual({
      overlap: [[6, 8], [17, 17]],
      notInclude: [[0, 4], [12, 13]]
    });
  });

  test("Overlap 0-2, 4-6, 8-10, 12-14, 16-18, 20, not include 3, 7, 11, 15, 19", () => {
    expect(getNumberIntervals([[0, 2], [4, 6], [8, 10], [12, 14], [16, 18], [20, 20]])).toStrictEqual({
      overlap: [],
      notInclude: [[3, 3], [7, 7], [11, 11], [15, 15], [19, 19]]
    });
  });

  test("Overlap 2-5, 3-7, 4-6, not include 0-1 and 8-20", () => {
    expect(getNumberIntervals([[2, 5], [3, 7], [4, 6]])).toStrictEqual({
      overlap: [[3, 6]],
      notInclude: [[0, 1], [8, 20]]
    });
  });
});