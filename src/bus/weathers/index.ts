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

type Options = {
    isFetchingEnable?: boolean
} | void

export const useWeathers = ({ isFetchingEnable = false }: Options) => {
    const dispatch = useDispatch();
    const selector = useSelector((state) => ({
        loading:        state.togglers.isWeathersFetching,
        weathers:       state.weathers.data,
        currentWeather: state.weathers.currentWeather,
    }));

    useEffect(() => {
        if (isFetchingEnable) {
            dispatch(fetchWeatherActionAsync());
        }
    }, []);

    return {
        ...selector,
        fetch:             () => void dispatch(fetchWeatherActionAsync()),
        setCurrentWeather: (payload: types.Weather) => void dispatch(
            weathersActions.setCurrentWeatherReducer(payload),
        ),
        setFilteredWeathers: (payload: types.ArrayWeathers) => void dispatch(
            weathersActions.setFilteredWeathers(payload),
        ),
    };
};
