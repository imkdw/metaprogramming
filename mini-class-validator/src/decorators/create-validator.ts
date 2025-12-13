import { validationMetadata } from "../metadata";

export function createValidatorDecorator(
  validatorType: string,
  options?: Record<string, unknown>
) {
  return function (target: Object, propertyKey: string) {
    const constructor = target.constructor;

    if (!validationMetadata.has(constructor)) {
      validationMetadata.set(constructor, new Map());
    }

    const properties = validationMetadata.get(constructor)!;

    if (!properties.has(propertyKey)) {
      properties.set(propertyKey, []);
    }

    properties.get(propertyKey)!.push({
      type: validatorType,
      options,
    });
  };
}
