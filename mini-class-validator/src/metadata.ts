import { ValidatorType } from "./validator-types";

export interface ValidatorEntry {
  type: ValidatorType;
  options?: Record<string, unknown> | undefined;
}

export const validationMetadata = new Map<Function, Map<string, ValidatorEntry[]>>();
