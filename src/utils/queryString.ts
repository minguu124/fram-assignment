export const createQueryString = (query: any) =>
  Object.keys(query)
    .map((key) => `${key}=${query[key]}`)
    .join("&");
