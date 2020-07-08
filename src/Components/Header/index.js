import React from 'react';

import { AntDesign } from '@expo/vector-icons';

import {Container,
        WrapperIcons,
        ButtonBack,
        ButtonSearch,
} from './styles';

export default function Header(){
    return(
        <Container>

            <WrapperIcons>

                <ButtonBack>
                    <AntDesign name="left" size={30} color="#fff" />
                </ButtonBack>

                <ButtonSearch>

                <AntDesign name="search1" size={30} color="#fff" />            

                </ButtonSearch>

            </WrapperIcons>

        </Container>
    )
}