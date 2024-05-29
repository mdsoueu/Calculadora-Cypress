import { isDot } from "./isDot";

describe("isDot", () => {
  test("returns true for '.'", () => {
    expect(isDot(".")).toBe(true);
  });

  test("returns false for 'a'", () => {
    expect(isDot("a")).toBe(false);
  });

  test("returns false for '1'", () => {
    expect(isDot("1")).toBe(false);
  });

  test("returns false for ''", () => {
    expect(isDot("")).toBe(false);
  });

  test("returns false for '1.'", () => {
    expect(isDot("1.")).toBe(false);
  });
});