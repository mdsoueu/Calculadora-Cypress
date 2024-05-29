import { removeZeroLeft } from "./removeZeroLeft";

describe("removeZeroLeft", () => {
  test("removes leading zero from number with multiple digits", () => {
    expect(removeZeroLeft("0123")).toBe("123");
  });

  test("does not remove zero from single-digit number", () => {
    expect(removeZeroLeft("0")).toBe("0");
  });

  test("does not remove zero from number with no leading zero", () => {
    expect(removeZeroLeft("123")).toBe("123");
  });

  test("returns empty string for empty input", () => {
    expect(removeZeroLeft("")).toBe("");
  });

  test("does not remove zero from right side of decimal point", () => {
    expect(removeZeroLeft("1.0")).toBe("1.0");
  });
});