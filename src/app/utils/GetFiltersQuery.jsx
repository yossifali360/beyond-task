export default function getFiltersQuery(filterObj) {
  let filterQuery = [];
  for (let key in filterObj) {
    if (filterObj[key] !== "") filterQuery.push(`${key}=${filterObj[key]}`);
  }
  return filterQuery.join("&");
}
