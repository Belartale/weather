//! Core
import React, { FC, useEffect, useState } from 'react';

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
    const { weathers, setFilteredWeathers } = useWeathers();

    const [ form, handleChange, setInitialForm, resetForm  ] = useForm<typeof InitialState>(InitialState);
    const [ isCloseBtn, setIsCloseBtn ] = useState(true);

    if (form.kindWeather === 'string') {
        console.log('some text');
    }

    const onSubmitFilter = (event: any) => {
        event.preventDefault();

        setFilter(form);

        setFilteredWeathers(filteredWeathers());
    };

    useEffect(() => {
        form.minTemperature !== null
        || form.maxTemperature !== null
        || form.kindWeather !== null
            ? setIsCloseBtn(false)
            : setIsCloseBtn(true);
    }, [ form.minTemperature, form.maxTemperature, form.kindWeather ]);


    return (
        // <ContainerForm onSubmit = { (event) => onSubmitFilter(event) }>
        <ContainerForm>
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
            <Button
                disabled = { isCloseBtn }
                onClick = { onSubmitFilter } >Отфильтровать
            </Button>
        </ContainerForm>
    );
};
