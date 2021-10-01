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
export type ArrayWeathers = Array<Weather>;

export type currentWeather = Weather | null;

export type WeathersState = {
    data: ArrayWeathers
    currentWeather: currentWeather
};

//! Contracts
export type SetWeathersContract = CaseReducer<WeathersState, PayloadAction<ArrayWeathers>>;

export type SetFilteredWeathersContract = CaseReducer<WeathersState, PayloadAction<ArrayWeathers>>;

export type SetCurrentWeatherContract = CaseReducer<WeathersState, PayloadAction<Weather>>;
