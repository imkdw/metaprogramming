export interface ValidatorEntry {
  type: string;
  options?: Record<string, unknown> | undefined;
}

export const validationMetadata = new Map<
  Function,
  Map<string, ValidatorEntry[]>
>();
