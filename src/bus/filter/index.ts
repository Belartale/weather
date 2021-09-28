//! Core
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

//! Tools
import { useSelector } from '../../tools/hooks';

//! Saga actions
import { fetchWeatherActionAsync } from './saga/actions';

//! Types
import { Weather } from './types';
import { weathersActions } from './slice';

//! Hooks
export const useFilter = () => {
    const dispatch = useDispatch();

    return {
        setCurrentWeather: (payload: Weather) => dispatch(weathersActions.setCurrentWeatherReducer(payload)),
    };
};
