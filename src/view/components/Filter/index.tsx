//! Core
import React, { FC, useState } from 'react';
import { useFilter } from '../../../bus/filter';
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
    const { setFilter } = useFilter();
    const [ form, handleChange, setInitialForm, resetForm  ] = useForm<typeof InitialState>(InitialState);
    const [ isCloseBtn, setIsCloseBtn ] = useState(false);

    const onSubmitFilter = (event: any) => {
        event.preventDefault();
        // console.log(event.target.kindWeather.value);

        // const values = [ 'kindWeather', 'minTemperature', 'maxTemperature' ];
        // values.forEach((value) => {});

        // resetForm();
        // console.log(form);
        setFilter(form);
    };


    return (
        <ContainerForm onSubmit = { (event) => onSubmitFilter(event) }>
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
                    onChange = { (event: any) => void handleChange(event, true)  }
                />
            </ContainerIndentBotton>
            <ContainerIndentBotton>
                <Input
                    id = 'Максимальная'
                    name = 'maxTemperature'
                    title = 'Максимальная температура'
                    type = 'number'
                    value = { form.maxTemperature }
                    onChange = { (event: any) => void handleChange(event, true)  }
                />
            </ContainerIndentBotton>
            <Button
                disabled = { isCloseBtn }
                type = 'submit' >Отфильтровать
            </Button>
        </ContainerForm>
    );
};


// //! Core
// import React, { FC, useState } from 'react';
// import { useForm } from '../../../tools/hooks';

// //! Containers
// import { ContainerIndentBotton } from '../../containers/ContainerIndentBotton';

// //! Elements
// import { Button, Input } from '../../elements';

// //! Styles
// import { ContainerForm } from './styles';

// //! Types
// // import { Filter as IFilter } from '../../../bus/filter/types';

// const InitialState = {
//     kindWeather:    null,
//     minTemperature: null,
//     maxTemperature: null,
// };

// export const Filter: FC = () => {
//     const [ form, handleChange, setInitialForm, resetForm  ] = useForm<typeof InitialState>(InitialState);


//     const [ filter, setFilter ] = useState({
//         kindWeather:    null,
//         minTemperature: null,
//         maxTemperature: null,
//     });
//     const [ isCloseBtn, setIsCloseBtn ] = useState(false);

//     const onSubmitFilter = (event: any) => {
//         // console.log(event.target.kindWeather.value);
//         event.preventDefault();
//         setFilter({
//             kindWeather:    event.target.kindWeather.value,
//             minTemperature: event.target.minTemperature.value,
//             maxTemperature: event.target.maxTemperature.value,
//         });
//         //todo сет в reducer
//         console.log('SUBMIT');
//     };


//     return (
//         <ContainerForm onSubmit = { onSubmitFilter }>
//             <ContainerIndentBotton>
//                 <Input
//                     id = 'Облачно'
//                     name = 'kindWeather'
//                     title = 'Облачно'
//                     type = 'radio'
//                     value = 'cloudy'
//                 />
//             </ContainerIndentBotton>
//             <ContainerIndentBotton>
//                 <Input
//                     id = 'Солнечно'
//                     name = 'kindWeather'
//                     title = 'Солнечно'
//                     type = 'radio'
//                     value = 'sunny'
//                 />
//             </ContainerIndentBotton>
//             <ContainerIndentBotton>
//                 <Input
//                     id = 'Минимальная'
//                     name = 'minTemperature'
//                     title = 'Минимальная температура'
//                     type = 'number'
//                 />
//             </ContainerIndentBotton>
//             <ContainerIndentBotton>
//                 <Input
//                     id = 'Максимальная'
//                     name = 'maxTemperature'
//                     title = 'Максимальная температура'
//                     type = 'number'
//                 />
//             </ContainerIndentBotton>
//             <Button disabled = { isCloseBtn } >Отфильтровать
//             </Button>
//         </ContainerForm>
//     );
// };
