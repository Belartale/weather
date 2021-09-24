//! Fetch
export const FETCH_WEATHERS_ASYNC = 'FETCH_WEATHERS_ASYNC';
export type FetchWeathersActionAsync = {
    type: typeof FETCH_WEATHERS_ASYNC;
};
export type FetchWeathersContract = () => FetchWeathersActionAsync
