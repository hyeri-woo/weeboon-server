export const getQueries = (object: object) => {
  const queries = {};
  for (const key in object) {
    queries[key] = object[key];
  }
  return queries;
};
