//! Core
import React, { FC } from 'react';

//! Components
import { CurrentWether, ErrorBoundary, Filter, Forecast, Head } from '../../components';

//! Redux
import { useWeathers } from '../../../bus/weathers';

//! Hooks
import { useFilter } from '../../../bus/client/filter';

//! Styles
import { Container, NoAvailable } from './styles';

const Main: FC = () => {
    const { filteredWeathers, setFilter } = useFilter();
    const { weathers, fetch } = useWeathers({
        isFetchingEnable: true,
    });

    return (
        <Container>
            <Filter
                fetch = { fetch }
                filteredWeathers = { filteredWeathers }
                setFilter = { setFilter }
            />
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
