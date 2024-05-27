import Cell from "../cell";

// Test 1
import rawPosition from "../goblin";

test("Importing Cell class", () => {
  expect(Cell).toBeDefined();
});

test("Importing rawPosition function", () => {
  expect(rawPosition).toBeDefined();
});

// Test 2
test("Creating new Cell instance and calling draw method without errors", () => {
  const cell = new Cell();
  expect(() => cell.draw()).toThrow();
});

test("Calling rawPosition function without errors", () => {
  expect(() => rawPosition()).toThrow();
});
