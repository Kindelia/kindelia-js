import kindelia from "../index";

describe("checkHaxHexValid", () => {
  test("should execute passing '0x64' and return true", () => {
    expect(kindelia.checkHaxHexValid("0x0000000000000000000000000000000000000000000000000000000000000000")).toBe(true);
  });

  test("should execute passing '0x1234567890abcdef' and return false", async () => {
    const isCheckHaxHexValid = kindelia.checkHaxHexValid("0x1234567890abcdef");

    expect(isCheckHaxHexValid).toBe(false);
  });

  test("should execute passing '0x0' and return false", async () => {
    const isCheckHaxHexValid = kindelia.checkHaxHexValid("0x0");

    expect(isCheckHaxHexValid).toBe(false);
  });

  test("should execute passing '0xffffe8c...d61f93' and return false", async () => {
    const isCheckHaxHexValid = kindelia.checkHaxHexValid(
      "0xffffe807ab99f7aade6b1de49dec85280aa84104557bfaaf32f63a1d1cd61f93"
    );

    expect(isCheckHaxHexValid).toBe(true);
  });
});
