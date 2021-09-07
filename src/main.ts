import { injectable }        from "tsyringe";
import { HelloWorldService } from "./services/hello-world.service";

@injectable()
export class Main {
    constructor(service: HelloWorldService) {
      console.log("hello world service injected");
    }

    public helloWorld(param: string) {
        return `Hello World: ${param}`;
    }
}
