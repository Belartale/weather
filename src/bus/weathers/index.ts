//! Core
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

//! Tools
import { useSelector } from '../../tools/hooks';

//! Saga actions
import { fetchWeatherActionAsync } from './saga/actions';

//! Types
// import { MessagesState } from './types';

//! Interfaces
// import { messagesActions } from './slice';

//! Hooks
export const useWeathers = () => {
    const dispatch = useDispatch();
    const selector = useSelector((state) => ({
        loading:        state.togglers.isWeathersFetching,
        weathers:       state.weathers.data,
        currentWeather: state.weathers.currentDay,
    }));

    useEffect(() => {
        dispatch(fetchWeatherActionAsync());
    }, []);

    return {
        ...selector,
    };
};
