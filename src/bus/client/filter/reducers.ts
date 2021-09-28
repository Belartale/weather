//! Types
import * as types from './types';

//! Reducers
export const setFilter: types.SetFilterContract = (...args) => {
    const [ , action ] = args;

    return { ...action.payload };
};
