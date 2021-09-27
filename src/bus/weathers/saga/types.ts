import { Weather } from "../types";

//! Fetch
export const FETCH_WEATHERS_ASYNC = 'FETCH_WEATHERS_ASYNC';
export type FetchWeathersActionAsync = {
    type: typeof FETCH_WEATHERS_ASYNC;
};
export type FetchWeathersContract = () => FetchWeathersActionAsync

//! Set
export const SET_CURRENT_WEATHERS_ASYNC = 'SET_CURRENT_WEATHERS_ASYNC';
export type SetCurrentWeathersActionAsync = {
    type: typeof SET_CURRENT_WEATHERS_ASYNC;
    payload: Weather;
};
export type SetCurrentWeathersContract = () => SetCurrentWeathersActionAsync
