import { createValidatorDecorator } from "./create-validator";
import { VALIDATOR_TYPES } from "../validator-types";

export function IsString() {
  return createValidatorDecorator(VALIDATOR_TYPES.IS_STRING);
}
