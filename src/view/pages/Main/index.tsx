//! Core
import React, { FC } from 'react';

//! Components
import { CurrentWether, ErrorBoundary, Filter, Forecast, Head } from '../../components';

//! Redux
import { useWeathers } from '../../../bus/weathers';

//! Styles
import { Container, NoAvailable } from './styles';

const Main: FC = () => {
    const { weathers } = useWeathers({
        isFetchingEnable: true,
    });

    return (
        <Container>
            <Filter />
            {
                weathers.length !== 0
                    ? (
                        <>
                            <Head/>
                            <CurrentWether />
                            <Forecast/>
                        </>
                    )
                    : (
                        <NoAvailable>По заданным критериям нет доступных дней!</NoAvailable>
                    )
            }

        </Container>
    );
};

export default () => (
    <ErrorBoundary>
        <Main />
    </ErrorBoundary>
);
