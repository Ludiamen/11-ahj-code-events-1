import Cell from "../cell";

test("Cell constructor sets size property correctly", () => {
  const cell = new Cell();
  expect(cell.size).toBe(4);
});

beforeEach(() => {
  document.body.innerHTML = '<div class="container"></div>';
});

test("Cell draw method creates correct number of blocks in container", () => {
  const cell = new Cell();
  cell.draw();
  const container = document.querySelector(".container");
  expect(container.children.length).toBe(16); // 4x4 grid
});
