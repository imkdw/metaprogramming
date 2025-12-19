import { createValidatorDecorator } from "./create-validator";
import { VALIDATOR_TYPES } from "../validator-types";

/**
 * 최대값을 검증하는 데코레이터
 * @param value - 최대값
 */
export function Max(value: number) {
  return createValidatorDecorator(VALIDATOR_TYPES.MAX, { value });
}
