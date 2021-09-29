//! Hooks
import { useDispatch } from 'react-redux';
import { useSelector } from '../../../tools/hooks';

//! Types
import { Filter } from './types';
import { filterActions } from './slice';
import { weathersActions } from '../../weathers/slice';
import { useEffect } from 'react';
import { Weather } from '../../weathers/types';

//! Types
type FilteredData = Array<Weather>;
export const useFilter = () => {
    const dispatch = useDispatch();

    const params = useSelector((state) => ({
        weathers: state.weathers.data,
        filter:   state.filter,
    }));

    const newFilteredData: FilteredData = params.weathers.filter((day) => {
        if ((params.filter.kindWeather && day.type !== params.filter.kindWeather)
            || (params.filter.minTemperature && day.temperature < Number(params.filter.minTemperature))
            || (params.filter.maxTemperature && day.temperature > Number(params.filter.maxTemperature))
        ) {
            return false;
        }

        return true;
    });
    //.slice(0, 7)


    useEffect(() => dispatch(weathersActions.setFilteredWeathers(newFilteredData)), [ params.filter ]);

    return {
        filteredWeathers: newFilteredData,
        setFilter:        (payload: Filter) => void dispatch(filterActions.setFilter(payload)),
    };
};
