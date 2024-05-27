function changePosition() {
  const position = [...document.querySelectorAll(".block")];
  const goblin = document.querySelector(".goblin");
  const goblinPosition = position.indexOf(goblin);
  const value = Math.floor(Math.random() * position.length);

  if (goblinPosition !== value) {
    position[goblinPosition].classList.remove("goblin");
    position[value].classList.add("goblin");
  }
}

export default function rawPosition() {
  const position = [...document.querySelectorAll(".block")];
  const value = Math.floor(Math.random() * position.length);

  position[value].classList.add("goblin");

  setInterval(changePosition, 1000, position);
}
