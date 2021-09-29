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

type Options = { isFetchingEnable?: true }

export const useWeathers = (options: Options) => {
    const dispatch = useDispatch();
    const selector = useSelector((state) => ({
        loading:        state.togglers.isWeathersFetching,
        weathers:       state.weathers.data,
        currentWeather: state.weathers.currentWeather,
    }));

    useEffect(() => {
        if (options?.isFetchingEnable) {
            dispatch(fetchWeatherActionAsync(1213));
        }
    }, []);

    return {
        ...selector,
        fetch:             () => void dispatch(fetchWeatherActionAsync(3)),
        setCurrentWeather: (payload: types.Weather) => void dispatch(
            weathersActions.setCurrentWeatherReducer(payload),
        ),
        setFilteredWeathers: (payload: types.ArrayWeathers) => void dispatch(
            weathersActions.setFilteredWeathers(payload),
        ),
    };
};
