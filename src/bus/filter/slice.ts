//! Core
import { createSlice } from '@reduxjs/toolkit';

//! Types
import { WeathersState } from './types';

//! Reducers
import * as reducers from './reducers';

const initialState: WeathersState = { data:           [],
    currentWeather: {
        id:               '',
        rain_probability: 0,
        humidity:         0,
        day:              0,
        temperature:      0,
        type:             '',
    }};

export const weathersSlice = createSlice({
    name: 'weathers',
    initialState,
    reducers,
});

export const weathersActions: any = weathersSlice.actions;
export default weathersSlice.reducer;
