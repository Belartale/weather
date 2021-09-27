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
export type WeathersState = Array<Weather>

//! Contracts
export type SetWeathersContract = CaseReducer<WeathersState, PayloadAction<WeathersState>>
