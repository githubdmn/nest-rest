import { Injectable } from "@nestjs/common";

@Injectable()
export class Dummy2201Service {
  getHello(): string {
    return "Dummy22-01!";
  }
}
