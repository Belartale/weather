//! Instruments
import * as types from './types';

export const SetFilterAction: types.SetFilterContractAction = (payload) => ({
    type: types.SET_FILTER,
    payload,
});

