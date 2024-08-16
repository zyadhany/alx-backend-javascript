export const weakMap = new WeakMap();
const MAX_ENDPOINT_CALLS = 5;

export function queryAPI(endpoint) {
  if (!weakMap.has(endpoint)) {
    weakMap.set(endpoint, 0);
  }
  const cnt = weakMap.get(endpoint);
  weakMap.set(endpoint, cnt + 1);

  if (weakMap.get(endpoint) >= MAX_ENDPOINT_CALLS) {
    throw new Error('Endpoint load is high');
  }
}
