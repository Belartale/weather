//! Core
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

//! Tools
import { useSelector } from '../../tools/hooks';

//! Saga actions
import { fetchWeatherActionAsync } from './saga/actions';

//! Types
import * as types from './types';
import { weathersActions } from './slice';

//! Hooks
export const useWeathers = () => {
    const dispatch = useDispatch();

    const selector = useSelector((state) => ({
        loading:        state.togglers.isWeathersFetching,
        weathers:       state.weathers.data,
        currentWeather: state.weathers.currentWeather,
    }));

    useEffect(() => {
        dispatch(fetchWeatherActionAsync());
    }, []);

    return {
        ...selector,
        fetch:               () => dispatch(fetchWeatherActionAsync()),
        setCurrentWeather:   (payload: types.Weather) => dispatch(weathersActions.setCurrentWeatherReducer(payload)),
        setFilteredWeathers: (payload: types.ArrayWeathers) => dispatch(weathersActions.setFilteredWeathers(payload)),
    };
};
