import "reflect-metadata";
import { container } from "tsyringe";
import { Main } from "./main";

const main = container.resolve(Main);
console.log(main.helloWorld("CoderCoco"));
