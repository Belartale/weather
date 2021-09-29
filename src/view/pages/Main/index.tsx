//! Core
import React, { FC } from 'react';
import { useSelector } from '../../../tools/hooks';

//! Components
import { CurrentWether, ErrorBoundary, Filter, Forecast, Head } from '../../components';

//! Styles
import { Container, NoAvailable } from './styles';

const Main: FC = () => {
    const { weathers } = useSelector((state) => state);

    const checkWeathers = () => {
        if (weathers.data[ 0 ]) {
            return (
                <div>
                    <Head/>
                    <CurrentWether />
                    <Forecast/>
                </div>
            );
        }

        return <NoAvailable>По заданным критериям нет доступных дней!</NoAvailable>;
    };

    return (
        <Container>
            <Filter />
            {checkWeathers()}
        </Container>
    );
};

export default () => (
    <ErrorBoundary>
        <Main />
    </ErrorBoundary>
);
