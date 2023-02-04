type clearedObject<T> = Record<string, NonNullable<T>>;

export const clearObject = <T = any>(
  object: Record<string, T>
): clearedObject<T> => {
  for (const key in object) {
    if (object[key] !== null && object[key] !== undefined) continue;

    delete object[key];
  }

  return object as clearedObject<T>;
};
