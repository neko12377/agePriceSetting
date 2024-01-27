import { describe, expect, test } from "@jest/globals";
import addComma from "./addComma";

describe("Adds commas to numbers", () => {
  test("Two digits", () => {
    expect(addComma("10")).toBe("10");
  });

  test("Three digits", () => {
    expect(addComma("100")).toBe("100");
  });

  test("Four digits", () => {
    expect(addComma("1000")).toBe("1,000");
  });

  test("Five digits", () => {
    expect(addComma("10000")).toBe("10,000");
  });

  test("Six digits", () => {
    expect(addComma("100000")).toBe("100,000");
  });

  test("Seven digits", () => {
    expect(addComma("1000000")).toBe("1,000,000");
  });

  test("One decimal place", () => {
    expect(addComma("1000.5")).toBe("1,000.5");
  });

  test("Two decimal places", () => {
    expect(addComma("1000.55")).toBe("1,000.55");
  });

  test("Three decimal places", () => {
    expect(addComma("1000.555")).toBe("1,000.555");
  });

  test("Four decimal places", () => {
    expect(addComma("1000.5555")).toBe("1,000.5555");
  });

  test("Negative number", () => {
    expect(addComma("-1000")).toBe("-1,000");
  });

});