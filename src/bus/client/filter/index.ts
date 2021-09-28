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


    const filteredWeathers = params.weathers.filter(({ temperature }) => {
        const { minTemperature, maxTemperature } = params.filter;

        if (minTemperature === null || maxTemperature === null) {
            return true;
        }


        const isMinTemperatureValid = temperature >= minTemperature;
        const isMaxTemperatureValid = temperature <= maxTemperature;
        if (minTemperature && maxTemperature) {
            return isMaxTemperatureValid && isMinTemperatureValid;
        } else if (minTemperature) {
            return isMinTemperatureValid;
        } else if (maxTemperature) {
            return isMaxTemperatureValid;
        }

        return false;
    });

    // console.log(filteredWeathers);


    // const filteredWeathers = () => {
    //     const { minTemperature, maxTemperature }: any = params.filter;

    //     return lodash.sortBy(params.weathers, [
    //         (o) => {
    //             return o.temperature > minTemperature && o.temperature < maxTemperature;
    //         },
    //     ]);
    // };


    return {
        filteredWeathers: () => filteredWeathers,
        setFilter:        (payload: Filter) => void dispatch(filterActions.setFilter(payload)),
    };
};
