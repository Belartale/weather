//! Tools
// import { ControlledError } from '../../../../tools/utils';

//! Constants
import { API_URL_WEATHERS } from '../../../../init/constants';

//! Types
import * as types from '../../types';
import { FetchWeathers } from './types';

export const fetchWeathers: FetchWeathers = async () => {
    const response = await fetch(`${API_URL_WEATHERS}/forecast?limit=30`, {
        method:  'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    });

    if (response.status !== 200) {
        throw new Error('fetchWeathers failed');
    }

    const { data }: { data: types.ArrayWeathers } = await response.json();

    return data;
};
