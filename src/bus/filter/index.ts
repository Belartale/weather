//! Core
import { useDispatch } from 'react-redux';

//! Types
import { Filter } from './types';
import { filterActions } from './slice';
import { useEffect } from 'react';

//! Hooks
export const useFilter = () => {
    const dispatch = useDispatch();

    return {
        setFilter: (payload: Filter) => void dispatch(payload),
    };
};
