// Tools
import { ControlledError } from '../../../../tools/utils';

// Constants
import { API_URL } from '../../../../init/constants';

// Types
import * as types from '../../types';

export const fetchWeathers: () => Promise<types.WeathersState> = async () => {
    const response = await fetch(`${API_URL}/messages`, {
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

    return response.json();
};
