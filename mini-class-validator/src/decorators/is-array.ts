import { createValidatorDecorator } from "./create-validator";

export const IS_ARRAY = "isArray";

export interface IsArrayOptions {
  each?: "string" | "number" | "boolean";
}

export function IsArray(options?: IsArrayOptions) {
  return createValidatorDecorator(IS_ARRAY, options as Record<string, unknown>);
}
