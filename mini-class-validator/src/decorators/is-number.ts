import { createValidatorDecorator } from "./create-validator";
import { VALIDATOR_TYPES } from "../validator-types";

export function IsNumber() {
  return createValidatorDecorator(VALIDATOR_TYPES.IS_NUMBER);
}
