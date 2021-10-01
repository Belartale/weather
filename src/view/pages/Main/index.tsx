//! Core
import React, { FC } from 'react';

//! Elements
import { NoAvailable } from '../../elements';

//! Components
import { CurrentWether, ErrorBoundary, Filter, Forecast, Head } from '../../components';

//! Redux
import { useWeathers } from '../../../bus/weathers';
import { useFilter } from '../../../bus/client/filter';

//! Styles
import { Container } from './styles';

const Main: FC = () => {
    const { filteredWeathers, setFilter } = useFilter();
    const { loading, currentWeather, weathers, fetch, setCurrentWeather } = useWeathers({
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
                            <Head
                                currentWeather = { currentWeather }
                                loading = { loading }
                            />
                            <CurrentWether
                                currentWeather = { currentWeather }
                                loading = { loading }
                            />
                            <Forecast
                                currentWeather = { currentWeather }
                                loading = { loading }
                                setCurrentWeather = { setCurrentWeather }
                                weathers = { weathers }
                            />
                        </>
                    )
                    : (
                        <NoAvailable center >По заданным критериям нет доступных дней!</NoAvailable>
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
