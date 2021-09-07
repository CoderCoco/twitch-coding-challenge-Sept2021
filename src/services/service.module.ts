import { registry, singleton } from "tsyringe";
import { HelloWorldService }   from "./hello-world.service";

@singleton()
@registry([
  { token: HelloWorldService, useClass: HelloWorldService }
])
export class ServiceModule {}
