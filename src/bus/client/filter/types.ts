//! Core
import { CaseReducer, PayloadAction } from '@reduxjs/toolkit';

//! State
export type Filter = {
    kindWeather:    string | null,
    minTemperature: number | null,
    maxTemperature: number | null,
};
export type FilterState = Filter;

//! Contracts
export type SetFilterContract = CaseReducer<FilterState, PayloadAction<FilterState>>

//! Actions
export const SET_FILTER = 'SET_FILTER';
export type SetFilterActionType = {
    type: typeof SET_FILTER;
    payload: Filter;
};
export type SetFilterContractAction = (payload: Filter) => SetFilterActionType;
