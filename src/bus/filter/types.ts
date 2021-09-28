//! Core
import { CaseReducer, PayloadAction } from '@reduxjs/toolkit';

//! State
export type Weather = {
    id: string,
    rain_probability: number,
    humidity: number,
    day: number,
    temperature: number,
    type: string
};
export type WeathersState = { data: Array<Weather>, currentWeather: Weather }

//! Contracts
export type SetWeathersContract = CaseReducer<WeathersState, PayloadAction<WeathersState>>

export type SetCurrentDayContract = CaseReducer<WeathersState, PayloadAction<Weather>>
