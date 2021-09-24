//! Core
import styled from 'styled-components';

//! Images
import bg from '../assets/images/bg.png';

export const AppContainer = styled.div`
    height: 100vh;
    width: 100vm;
    display: flex;
    flex-direction: column;
    background-image: url(${bg});
`;
