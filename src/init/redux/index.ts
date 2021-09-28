//! Core
import { configureStore } from '@reduxjs/toolkit';

//! Reducers
import togglers from '../../bus/client/togglers';
import errors from '../../bus/client/errors';
import counter from '../../bus/counter/slice';
import messages from '../../bus/messages/slice';

import weathers from '../../bus/weathers/slice';
import filter from '../../bus/filter/slice';

//! Middleware
import { middleware, sagaMiddleware } from './middleware';

//! Sagas
import { rootSaga } from './rootSaga';

export const store = configureStore({
    reducer: {
        togglers,
        errors,
        counter,
        messages,
        weathers,
        filter,
    },
    middleware,
    devTools: process.env.NODE_ENV !== 'production',
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

sagaMiddleware.run(rootSaga);
