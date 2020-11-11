import { verifyPassword, verifyUsername } from "../verify";
import { validate } from "../user";

jest.mock("../verify.js");

describe("validate", () => {
  test("should validate username and password", () => {
    // Arrange
    verifyPassword.mockReturnValue(false);
    verifyUsername.mockReturnValue(true);
    // Act
    const result = validate("123456abc", "123456");
    // Assert
    expect(result).toBe(false);
  });
});
