export const SET_COUNTRY = 'SET_COUNTRY';
export const GET_ADS = 'GET_ADS';
export const GET_BRANDS = 'GET_BRANDS';
export const GET_SEARCHES = 'GET_SEARCHES';
export const SET_NAV_DROP = 'SET_NAV_DROP';

export const setNavDrop = selected => {
  return {
    type: SET_NAV_DROP,
    navDropName: selected
  };
};
