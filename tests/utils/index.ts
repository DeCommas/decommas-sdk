export function sleep() {
  return new Promise((resolve) => setTimeout(resolve, 1000));
}

export function checkResponse(response: object, schema: object) {
  expect(response).toBeDefined();
  expect(response).toMatchSchema(schema);
}

export function notEmpty<TValue>(
  value: TValue | null | undefined
): value is TValue {
  return value !== null && value !== undefined;
}

type NonFunctional<T> = T extends () => void ? never : T;

/**
 * Helper to produce an array of enum values.
 * @param enumeration Enumeration object.
 */
export function getEnumValues<
  T extends Record<string | number, NonFunctional<T[keyof T]>>
>(enumeration: T): NonFunctional<T[keyof T]>[] {
  return Object.keys(enumeration)
    .filter((key) => Number.isNaN(Number(key)))
    .map((key) => enumeration[key])
    .filter(notEmpty)
    .filter((val) => typeof val === "number" || typeof val === "string");
}
