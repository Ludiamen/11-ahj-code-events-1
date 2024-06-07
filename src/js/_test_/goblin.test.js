/**
 * @jest-environment jsdom
 */

import Goblin from "../goblin";

describe("Goblin class", () => {
  let goblin;
  let container;
  let scoreCounter;
  let missesCounter;

  beforeEach(() => {
    // Set up our document body
    document.body.innerHTML = `
    <div class="counter">
      <div class="score">Количество попаданий: 0</div>
      <div class="misses">Количество пропущенных: 0</div>
    </div>
    <div class="container"></div>
    <div class="goblin"></div>
    `;

    container = document.querySelector(".container");
    scoreCounter = document.querySelector(".score");
    missesCounter = document.querySelector(".misses");

    goblin = new Goblin();

    // Mock alert
    global.alert = jest.fn();
  });

  test("initializes with zero score and misses", () => {
    expect(goblin.score).toBe(0);
    expect(goblin.misses).toBe(0);
  });

  test("changes position of goblin and increases misses", () => {
    jest.useFakeTimers();
    goblin.changePosition();

    // Fast-forward 1000ms
    jest.advanceTimersByTime(1000);
    const goblinElement = document.querySelector(".goblin");
    expect(goblinElement).not.toBeNull();
    expect(goblin.misses).toBe(1);
    expect(missesCounter.textContent).toBe("Количество пропущенных: 1");

    // Fast-forward 4000ms (total 5000ms)
    jest.advanceTimersByTime(4000);
    expect(goblin.misses).toBe(5);
    expect(missesCounter.textContent).toBe("Количество пропущенных: 5");

    // Check for game over alert
    jest.advanceTimersByTime(1000);
    expect(global.alert).toHaveBeenCalledWith(
      "Игра окончена! Вы промахнулись 5 раз",
    );
    jest.useRealTimers();
  });

  test("increments score and updates scoreCounter on gotCaught", () => {
    goblin.gotCaught();
    const goblinElement = document.querySelector(".block");
    goblinElement.classList.add("goblin");

    goblinElement.click();

    expect(goblin.score).toBe(1);
    expect(scoreCounter.textContent).toBe("Количество попаданий: 1");
  });

  test("updates missesCounter on miss", () => {
    goblin.gotCaught();
    const blockElement = document.querySelector(".block");

    blockElement.click();

    expect(goblin.misses).toBe(1);
    expect(missesCounter.textContent).toBe("Количество пропущенных: 1");
  });
});
