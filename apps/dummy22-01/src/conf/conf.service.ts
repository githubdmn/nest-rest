import { Injectable } from "@nestjs/common";

@Injectable()
export class ConfService {
  constructor() {}
  getValues() {
    return {
      property: "value",
    };
  }
}

let c: ConfService;
export const envar = c?.getValues();
