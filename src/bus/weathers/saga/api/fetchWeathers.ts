//! Tools
import { ControlledError } from '../../../../tools/utils';

//! Constants
import { API_URL_WEATHERS } from '../../../../init/constants';

//! Types
import * as types from '../../types';

export const fetchWeathers: () => Promise<types.ArrayWeathers> = async () => {
    const response = await fetch(`${API_URL_WEATHERS}/forecast?limit=30`, {
        method:  'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    });

    if (response.status !== 200) {
        throw new ControlledError({
            message:    'fetchWeathers failed',
            statusCode: response.status,
            data:       {
                test: '123',
            },
        });
    }

    const { data }: { data: types.ArrayWeathers } = await response.json();

    return data;
};
