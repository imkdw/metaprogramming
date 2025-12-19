/**
 * 검증기 타입 상수
 */
export const VALIDATOR_TYPES = {
  IS_STRING: "isString",
  IS_NUMBER: "isNumber",
  IS_ARRAY: "isArray",
  MIN: "min",
  MAX: "max",
  MIN_LENGTH: "minLength",
  MAX_LENGTH: "maxLength",
} as const;

export type ValidatorType = (typeof VALIDATOR_TYPES)[keyof typeof VALIDATOR_TYPES];
