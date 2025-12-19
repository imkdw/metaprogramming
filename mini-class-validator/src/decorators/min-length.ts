import { createValidatorDecorator } from "./create-validator";
import { VALIDATOR_TYPES } from "../validator-types";

/**
 * 최소 길이를 검증하는 데코레이터
 * @param value - 최소 길이
 */
export function MinLength(value: number) {
  return createValidatorDecorator(VALIDATOR_TYPES.MIN_LENGTH, { value });
}
