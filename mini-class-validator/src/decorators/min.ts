import { createValidatorDecorator } from "./create-validator";
import { VALIDATOR_TYPES } from "../validator-types";

/**
 * 최소값을 검증하는 데코레이터
 * @param value - 최소값
 */
export function Min(value: number) {
  return createValidatorDecorator(VALIDATOR_TYPES.MIN, { value });
}
