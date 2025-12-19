import { createValidatorDecorator } from "./create-validator";
import { VALIDATOR_TYPES } from "../validator-types";

export interface IsArrayOptions {
  each?: "string" | "number" | "boolean";
}

export function IsArray(options?: IsArrayOptions) {
  return createValidatorDecorator(VALIDATOR_TYPES.IS_ARRAY, options as Record<string, unknown>);
}
