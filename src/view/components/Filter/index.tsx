//! Core
import React, { FC, useEffect, useState } from 'react';
import { EventChannel } from 'redux-saga';

//! Hooks
import { useFilter } from '../../../bus/client/filter';
import { useWeathers } from '../../../bus/weathers';
import { useForm } from '../../../tools/hooks';

//! Containers
import { ContainerIndentBotton } from '../../containers/ContainerIndentBotton';

//! Elements
import { Button, Input } from '../../elements';

//! Styles
import { ContainerForm } from './styles';

//! Types
// import { Filter as IFilter } from '../../../bus/filter/types';

const InitialState = {
    kindWeather:    null,
    minTemperature: null,
    maxTemperature: null,
};

export const Filter: FC = () => {
    const { filteredWeathers, setFilter } = useFilter();
    const { weathers, setFilteredWeathers, fetch } = useWeathers();

    const [ isReset, setIsReset ] = useState(false);

    const [ form, handleChange, setInitialForm, resetForm  ] = useForm<typeof InitialState>(InitialState);
    const [ isCloseBtn, setIsCloseBtn ] = useState(true);

    if (form.kindWeather === 'string') {
        console.log('some text');
    }

    const onSubmitFilter = (event: any) => {
        // event.preventDefault();

        setFilter(form);

        setFilteredWeathers(filteredWeathers());
        setIsReset(true);
        console.log('some text');
    };

    const onResetFilter = (event: any) => {
        // event.preventDefault();

        setFilter(form);

        resetForm();
        setInitialForm(InitialState);
        fetch();
        setIsReset(false);
    };

    useEffect(() => {
        form.minTemperature !== null
        || form.maxTemperature !== null
        || form.kindWeather !== null
            ? setIsCloseBtn(false)
            : setIsCloseBtn(true);
    }, [ form.minTemperature, form.maxTemperature, form.kindWeather ]);


    return (
        <ContainerForm onSubmit = { (event) => event.preventDefault() }>
            <ContainerIndentBotton>
                <Input
                    id = 'Облачно'
                    name = 'kindWeather'
                    title = 'Облачно'
                    type = 'radio'
                    value = 'cloudy'
                    onChange = { (event: any) => void handleChange(event, false)  }
                />
            </ContainerIndentBotton>
            <ContainerIndentBotton>
                <Input
                    id = 'Солнечно'
                    name = 'kindWeather'
                    title = 'Солнечно'
                    type = 'radio'
                    value = 'sunny'
                    onChange = { (event: any) => void handleChange(event, false)  }
                />
            </ContainerIndentBotton>
            <ContainerIndentBotton>
                <Input
                    id = 'Минимальная'
                    name = 'minTemperature'
                    title = 'Минимальная температура'
                    type = 'number'
                    value = { form.minTemperature }
                    onChange = { (event: any) => handleChange(event, true) }
                />
            </ContainerIndentBotton>
            <ContainerIndentBotton>
                <Input
                    id = 'Максимальная'
                    name = 'maxTemperature'
                    title = 'Максимальная температура'
                    type = 'number'
                    value = { form.maxTemperature }
                    onChange = { (event: any) => handleChange(event, true)  }
                />
            </ContainerIndentBotton>
            { !isReset
                ? <Button
                    disabled = { isCloseBtn }
                    onClick = { onSubmitFilter } >Отфильтровать
                  </Button>
                : <Button
                    onClick = { onResetFilter } >Сброс
                  </Button>
            }
        </ContainerForm>
    );
};
