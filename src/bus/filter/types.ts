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

