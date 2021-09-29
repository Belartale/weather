//! Core
import { configureStore } from '@reduxjs/toolkit';

//! Reducers
import togglers from '../../bus/client/togglers';
import errors from '../../bus/client/errors';

import weathers from '../../bus/weathers/slice';
import filter from '../../bus/client/filter/slice';

//! Middleware
import { middleware, sagaMiddleware } from './middleware';

//! Sagas
import { rootSaga } from './rootSaga';

export const store = configureStore({
    reducer: {
        togglers,
        errors,
        weathers,
        filter,
    },
    middleware,
    devTools: process.env.NODE_ENV !== 'production',
});

export type RootState = ReturnType<typeof store.getState>

sagaMiddleware.run(rootSaga);
