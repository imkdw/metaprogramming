import { createValidatorDecorator } from "./create-validator";

export const IS_NUMBER = "isNumber";

export function IsNumber() {
  return createValidatorDecorator(IS_NUMBER);
}
