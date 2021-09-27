//! Core
import React, { FC } from 'react';

//! Components
import { CurrentWether, ErrorBoundary, Filter, Forecast, Head } from '../../components';

//! Styles
import { Container } from './styles';

const Main: FC = () => {
    return (
        <Container>
            <Filter />
            <Head/>
            <CurrentWether />
            <Forecast/>
        </Container>
    );
};

export default () => (
    <ErrorBoundary>
        <Main />
    </ErrorBoundary>
);
