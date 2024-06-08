/**
 * @jest-environment jsdom
 */

import Goblin from "../goblin";

describe("Goblin", () => {
  let goblin;

  beforeEach(() => {
    document.body.innerHTML = `
      <div class="container">
        <div class="block"></div>
        <div class="block"></div>
        <div class="block"></div>
        <div class="block"></div>
      </div>
      <div class="score">Количество попаданий: 0</div>
      <div class="misses">Количество пропущенных: 0</div>
    `;

    goblin = new Goblin();
  });

  afterEach(() => {
    jest.clearAllTimers();
  });

  it("should initialize with correct default values", () => {
    expect(goblin.misses).toBe(0);
    expect(goblin.score).toBe(0);
    expect(goblin.interval).toBe(null);
  });

  it("should change position every second", () => {
    jest.useFakeTimers();
    const spySetInterval = jest.spyOn(global, "setInterval");
    goblin.changePosition();
    expect(spySetInterval).toHaveBeenCalledTimes(1);
    jest.advanceTimersByTime(1000);
    return Promise.resolve().then(() => {
      expect(document.querySelectorAll(".goblin").length).toBe(1);
      spySetInterval.mockRestore();
    });
  });

  it("should remove goblin class from previous block", () => {
    jest.useFakeTimers();
    goblin.changePosition();

    expect(document.querySelectorAll(".goblin").length).toBe(0);
  });
});
