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
    const { weathers, filter } = useSelector(({ weathers, filter }) => ({ weathers, filter }));

    const newFilteredData: FilteredData = weathers.data.filter((day) => {
        if ((filter.kindWeather && day.type !== filter.kindWeather)
            || (filter.minTemperature && day.temperature < Number(filter.minTemperature))
            || (filter.maxTemperature && day.temperature > Number(filter.maxTemperature))

            || (filter.minTemperature === 0 && filter.maxTemperature === 0 && day.temperature !== 0)
        ) {
            return false;
        }

        return true;
    });
    //.slice(0, 7)

    useEffect(() => {
        dispatch(weathersActions.setFilteredWeathers(newFilteredData));
        dispatch(weathersActions.setCurrentWeather(newFilteredData[ 0 ]));
    }, [ filter ]);

    return {
        filteredWeathers: newFilteredData,
        setFilter:        (payload: Filter) => void dispatch(filterActions.setFilter(payload)),
    };
};
