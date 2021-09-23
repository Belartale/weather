//! Core
import React, { FC } from 'react';

//! Components
import { CurrentWether, ErrorBoundary, Filter, Forecast, Head } from '../../components';

//! Redux
import { useMessages } from '../../../bus/messages';

//! Styles
import { Container } from './styles';

const Main: FC = () => {
    const { messages, loading } = useMessages();

    console.log('🚀', messages);
    console.log('🚀', loading);


    return (
        <Container>
            main
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
