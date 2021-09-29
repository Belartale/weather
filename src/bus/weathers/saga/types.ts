//! Fetch
export const FETCH_WEATHERS_ASYNC = 'FETCH_WEATHERS_ASYNC';
export type FetchWeathersActionAsync = {
    type: typeof FETCH_WEATHERS_ASYNC
    payload: number
};
export type FetchWeathersContract = (payload: number) => FetchWeathersActionAsync
