


export function buildParams(params: Record<string, any>): Record<string, any> {
  // Filter out parameters that are null or undefined
  return Object.fromEntries(
    Object.entries(params).filter(([_, v]) => v != null)
  );
}