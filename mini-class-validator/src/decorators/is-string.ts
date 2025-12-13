import { createValidatorDecorator } from "./create-validator";

export const IS_STRING = "isString";

export function IsString() {
  return createValidatorDecorator(IS_STRING);
}
