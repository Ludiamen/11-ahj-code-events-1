import Cell from "./cell";
import Goblin from "./goblin";
import Cursor from "./components/cursor/cursor";

const cell = new Cell();
const goblin = new Goblin();
const cursor = new Cursor(".container");

cell.draw();
goblin.changePosition();
goblin.gotCaught();
