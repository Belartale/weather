//! Core
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

//! Tools
import { useSelector } from '../../tools/hooks';

//! Saga actions
import { fetchWeatherActionAsync, setCurrentWeatherActionAsync } from './saga/actions';

//! Types
import { Weather } from './types';
import { weathersActions } from './slice';

//! Interfaces
// import { messagesActions } from './slice';

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
        setCurrentWeather: (payload: Weather) => dispatch(weathersActions.setCurrentWeatherReducer(payload)),
    };
};
