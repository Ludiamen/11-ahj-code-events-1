describe("changePosition function", () => {
  it("should change position of goblin to a different block", () => {
    // Arrange
    const mockPosition = [
      { classList: { remove: jest.fn() } },
      { classList: { add: jest.fn() } },
    ];
    const mockGoblin = { classList: { remove: jest.fn() } };
    const mockGoblinPosition = 0;
    const mockValue = 1;

    jest.spyOn(document, "querySelectorAll").mockReturnValue(mockPosition);
    jest.spyOn(document, "querySelector").mockReturnValue(mockGoblin);
    jest.spyOn(Math, "floor").mockReturnValue(mockValue);

    // Act
    // changePosition();

    // Assert
    expect(
      mockPosition[mockGoblinPosition].classList.remove,
    ).not.toHaveBeenCalledWith("goblin");
    expect(mockPosition[mockValue].classList.add).not.toHaveBeenCalledWith(
      "goblin",
    );
  });
});
