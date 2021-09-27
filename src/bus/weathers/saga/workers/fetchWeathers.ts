// Types
import { WeathersState } from '../../types';

// Sync actions
import { weathersActions } from '../../slice';

// Api
import * as API from '../api';

// Instruments
import { IControlledError, makeRequest } from '../../../../tools/utils';

export function* fetchWeathers() {
    const combineResult: IControlledError & WeathersState = yield makeRequest<WeathersState>({
        fetcher:          API.fetchWeathers,
        togglerType:      'isWeathersFetching',
        fill:             weathersActions.setWeathers,
        isControlledMode: true,
    });

    if (combineResult?.name === 'ControlledError') {
        console.log(combineResult.errorId);
    }

    // if (combineResult.length) {
    //     console.log(combineResult);
    // }
}
