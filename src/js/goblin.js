// export default class Goblin {
//   constructor() {
//     this.misses = 0;
//     this.score = 0;
//   }

//   changePosition() {
//     const position = [...document.querySelectorAll(".block")];
//     let goblinPosition = 0;
//     const interval = setInterval(() => {
//       const random = Math.floor(Math.random() * position.length);
//       if (random !== goblinPosition) {
//         position[goblinPosition].classList.remove("goblin");
//         position[random].classList.add("goblin");
//         goblinPosition = random;
//         this.misses += 1;
//         document.querySelector(".misses").innerText = `Количество пропущенных: ${this.misses}`;
//       }
//       if (this.misses === 5) {
//         position[random].classList.remove("goblin");
//         alert("Игра окончена! Вы промахнулись 5 раз");
//         clearInterval(interval);
//       }
//     }, 1000);
//   }

//   gotCaught() {
//     const container = document.querySelector(".container");
//     const scoreCounter = document.querySelector(".score");
//     const missesCounter = document.querySelector(".misses");
//     container.addEventListener("click", (event) => {
//       const e = event.target;
//       if (e.className.includes("goblin")) {
//         e.classList.remove("goblin");
//         this.score += 1;
//         scoreCounter.innerText = `Количество попаданий: ${this.score}`;
//       } else {
//         this.misses += 1;
//         missesCounter.innerText = `Количество пропущенных: ${this.misses}`;
//       }
//     });
//   }
// }

// export default class Goblin {
//   constructor() {
//     this.misses = 0;
//     this.score = 0;
//     this.interval = null;
//   }

//   changePosition() {
//     const position = [...document.querySelectorAll(".block")];
//     let goblinPosition = 0;
//     this.interval = setInterval(() => {
//       const random = Math.floor(Math.random() * position.length);
//       if (random !== goblinPosition) {
//         position[goblinPosition].classList.remove("goblin");
//         position[random].classList.add("goblin");
//         goblinPosition = random;
//         this.misses += 1;
//         document.querySelector(".misses").innerText = `Количество пропущенных: ${this.misses}`;
//       }
//       if (this.misses === 5) {
//         position[random].classList.remove("goblin");
//         alert("Игра окончена! Вы промахнулись 5 раз");
//         clearInterval(this.interval);
//       }
//     }, 1000);
//   }

//   gotCaught() {
//     const container = document.querySelector(".container");
//     const scoreCounter = document.querySelector(".score");
//     const missesCounter = document.querySelector(".misses");
//     container.addEventListener("click", (event) => {
//       const e = event.target;
//       if (e.className.includes("goblin")) {
//         e.classList.remove("goblin");
//         this.score += 1;
//         scoreCounter.innerText = `Количество попаданий: ${this.score}`;
//       } else {
//         this.misses += 1;
//         missesCounter.innerText = `Количество пропущенных: ${this.misses}`;
//       }
//     });
//   }
// }
export default class Goblin {
  constructor() {
    this.misses = 0;
    this.score = 0;
    this.interval = null;
  }

  changePosition() {
    const position = [...document.querySelectorAll(".block")];
    let goblinPosition = 0;
    this.interval = setInterval(() => {
      const random = Math.floor(Math.random() * position.length);
      if (random !== goblinPosition) {
        position[goblinPosition].classList.remove("goblin");
        position[random].classList.add("goblin");
        goblinPosition = random;
        // this.misses += 1;
        document.querySelector(".misses").innerText =
          `Количество пропущенных: ${this.misses}`;
      }
      if (this.misses >= 5) {
        position[random].classList.remove("goblin");
        alert("Игра окончена! Вы промахнулись более 4 раз");
        clearInterval(this.interval);
      }
    }, 1000);
  }

  gotCaught() {
    const container = document.querySelector(".container");
    const scoreCounter = document.querySelector(".score");
    const missesCounter = document.querySelector(".misses");
    container.addEventListener("click", (event) => {
      const e = event.target;
      if (e.className.includes("goblin")) {
        e.classList.remove("goblin");
        this.score += 1;
        scoreCounter.innerText = `Количество попаданий: ${this.score}`;
      } else {
        this.misses += 1;
        missesCounter.innerText = `Количество пропущенных: ${this.misses}`;
      }
    });
  }
}
