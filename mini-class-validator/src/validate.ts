import { validationMetadata } from "./metadata";

type ValidatorFn = (value: unknown, options?: Record<string, unknown>) => boolean;

const validators: Record<string, ValidatorFn> = {
  isString: (value) => typeof value === "string",
  isNumber: (value) => typeof value === "number",
  isArray: (value, options) => {
    if (!Array.isArray(value)) return false;

    const each = options?.each as string | undefined;
    if (!each) return true;

    return value.every((item) => typeof item === each);
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
        const optionStr = entry.options
          ? ` (options: ${JSON.stringify(entry.options)})`
          : "";
        errors.push(`${propertyKey}: ${entry.type}${optionStr} 검증 실패`);
      }
    }
  }

  if (errors.length > 0) {
    throw new Error(errors.join(", "));
  }
}
