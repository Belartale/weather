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

    useEffect(() => {
        dispatch(weathersActions.setCurrentWeatherReducer(selector.weathers[ 0 ]));
    }, [ selector.weathers ]);

    return {
        ...selector,
        fetch:             () => void dispatch(fetchWeatherActionAsync()),
        setCurrentWeather: (payload: types.Weather) => void
        dispatch(weathersActions.setCurrentWeatherReducer(payload)),
        setFilteredWeathers: (payload: types.ArrayWeathers) => void
        dispatch(weathersActions.setFilteredWeathers(payload)),
    };
};
