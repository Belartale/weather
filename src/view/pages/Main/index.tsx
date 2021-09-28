//! Core
import React, { FC } from 'react';
import { useSelector } from '../../../tools/hooks';

//! Components
import { CurrentWether, ErrorBoundary, Filter, Forecast, Head } from '../../components';

//! Styles
import { Container, NoAvailable } from './styles';

const Main: FC = () => {
    const { weathers } = useSelector((state) => state);

    return (
        <Container>
            <Filter />
            { weathers.data[ 0 ]
                ? <>
                    <Head/>
                    <CurrentWether />
                    <Forecast/>
                </> : <NoAvailable>По заданным критериям нет доступных дней!</NoAvailable> }
        </Container>
    );
};

export default () => (
    <ErrorBoundary>
        <Main />
    </ErrorBoundary>
);
