import { createValidatorDecorator } from "./create-validator";
import { VALIDATOR_TYPES } from "../validator-types";

/**
 * 최대 길이를 검증하는 데코레이터
 * @param value - 최대 길이
 */
export function MaxLength(value: number) {
  return createValidatorDecorator(VALIDATOR_TYPES.MAX_LENGTH, { value });
}
