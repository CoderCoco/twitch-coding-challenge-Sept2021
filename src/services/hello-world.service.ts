import { injectable } from "tsyringe";

@injectable()
export class HelloWorldService {
  constructor() {
    console.log("hello world service init");
  }
}
