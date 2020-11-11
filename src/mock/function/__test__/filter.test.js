import filter from "../filter";

describe("mock callback", () => {
  test("toHaveBeenCalledWith", () => {
    // Arrange
    const mockFn = jest.fn();
    const callback = mockFn
      .mockReturnValueOnce(true)
      .mockReturnValue(false)
      .mockReturnValueOnce(true);
    const array = [1, 2, 3, 4];

    // Act
    const result = filter(callback, array);

    // Assert
    expect(result).toEqual([1, 2]);
  });

  test("toHaveReturned", () => {
    // Arrange
    const mockFn = jest.fn();
    const callback = mockFn.mockReturnValue(true);
    const array = [1, 2, 3, 4];

    // Act
    const result = filter(callback, array);

    // Assert
    expect(result).toEqual([1, 2, 3, 4]);
    expect(mockFn).toHaveBeenCalled();
    expect(mockFn).toHaveBeenCalledTimes(4);
    expect(mockFn).toHaveBeenCalledWith(4);
  });
});
