import { validationMetadata } from "./metadata";
import { VALIDATOR_TYPES, ValidatorType } from "./validator-types";

/**
 * 검증 함수 타입
 * @param value - 검증할 실제 값
 * @param options - 데코레이터를 통해서 전달된 옵션
 * @returns 검증 결과 (true: 검증 성공, false: 검증 실패)
 */
type ValidatorFn = (value: unknown, options?: Record<string, unknown>) => boolean;

const validators: Record<ValidatorType, ValidatorFn> = {
  [VALIDATOR_TYPES.IS_STRING]: (value) => typeof value === "string",
  [VALIDATOR_TYPES.IS_NUMBER]: (value) => typeof value === "number",
  [VALIDATOR_TYPES.IS_ARRAY]: (value, options) => {
    if (!Array.isArray(value)) return false;

    const each = options?.each as string | undefined;
    if (!each) return true;

    return value.every((item) => typeof item === each);
  },
  [VALIDATOR_TYPES.MIN]: (value, options) => {
    if (typeof value !== "number") return false;
    const minValue = options?.value as number;
    return value >= minValue;
  },
  [VALIDATOR_TYPES.MAX]: (value, options) => {
    if (typeof value !== "number") return false;
    const maxValue = options?.value as number;
    return value <= maxValue;
  },
  [VALIDATOR_TYPES.MIN_LENGTH]: (value, options) => {
    if (typeof value !== "string") return false;
    const minLen = options?.value as number;
    return value.length >= minLen;
  },
  [VALIDATOR_TYPES.MAX_LENGTH]: (value, options) => {
    if (typeof value !== "string") return false;
    const maxLen = options?.value as number;
    return value.length <= maxLen;
  },
};

export function validate<T extends object>(instance: T): void {
  const constructor = instance.constructor;
  const properties = validationMetadata.get(constructor);

  if (!properties) return;

  const errors: string[] = [];

  for (const [propertyKey, validatorEntries] of properties.entries()) {
    const value = (instance as Record<string, unknown>)[propertyKey];

    for (const entry of validatorEntries) {
      const validator = validators[entry.type];

      if (validator && !validator(value, entry.options)) {
        const optionStr = entry.options ? ` (options: ${JSON.stringify(entry.options)})` : "";
        errors.push(`${propertyKey}: ${entry.type}${optionStr} 검증 실패`);
      }
    }
  }

  if (errors.length > 0) {
    throw new Error(errors.join(", "));
  }
}
