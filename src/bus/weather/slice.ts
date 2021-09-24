// Core
import { createSlice } from '@reduxjs/toolkit';

// Types
import { WeathersState } from './types';

// Reducers
import * as reducers from './reducers';

const initialState: WeathersState = [];

export const weathersSlice = createSlice({
    name: 'weathers',
    initialState,
    reducers,
});

export const weathersActions = weathersSlice.actions;
export default weathersSlice.reducer;
