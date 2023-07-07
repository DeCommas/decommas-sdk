export const getSearchParams = (params: Record<string, string> = {}) => {
  const searchParams = new URLSearchParams(params);
  const keysForDel: string[] = [];
  searchParams.forEach((value, key) => {
    if (value == "" || value === "undefined") {
      keysForDel.push(key);
    }
  });

  keysForDel.forEach((key) => {
    searchParams.delete(key);
  });
  return searchParams;
};
