export const FILTER_TYPE = 'filter_change';
const actionFilter = (filterName) => ({
  type: FILTER_TYPE,
  payload: filterName,
});
export default actionFilter;
