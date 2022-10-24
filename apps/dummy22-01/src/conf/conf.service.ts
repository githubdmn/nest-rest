import { Injectable } from "@nestjs/common";

@Injectable()
export class ConfService {
  constructor() {}
  getValues() {
    return {
      env: "dev",
    };
  }
}

let c: ConfService;
export const envar = c?.getValues();
