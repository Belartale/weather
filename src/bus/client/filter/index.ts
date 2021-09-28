//! Core
import * as lodash from 'lodash';

//! Hooks
import { useDispatch } from 'react-redux';
import { useSelector } from '../../../tools/hooks';

//! Types
import { Filter } from './types';
import { filterActions } from './slice';

//! Hooks
export const useFilter = () => {
    const dispatch = useDispatch();

    const params = useSelector((state) => ({
        weathers: state.weathers.data,
        filter:   state.filter,
    }));


    const newFilteredData = params.weathers.filter((day) => {
        if ((params.filter.kindWeather && day.type !== params.filter.kindWeather)
            || (params.filter.minTemperature && day.temperature < Number(params.filter.minTemperature))
            || (params.filter.maxTemperature && day.temperature > Number(params.filter.maxTemperature))
        ) {
            return false;
        }

        return true;
    });
    //.slice(0, 7)

    return {
        filteredWeathers: () => newFilteredData,
        setFilter:        (payload: Filter) => void dispatch(filterActions.setFilter(payload)),
    };
};
