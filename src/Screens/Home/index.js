import React from 'react';

import { MaterialCommunityIcons } from '@expo/vector-icons';

import Developer from '../../Images/HomeScreen/developer.png';

import {Wrapper,
        Container,
        Title,
        Img,
        ButtonInit,
        TitleButton,
} from './styles';

export default function Home(){
    return(
        <Wrapper>

            <Container>

                <Title>Linguagens de Programação</Title>

                <Img source={Developer} alt="Desenvolvedor" />

                <ButtonInit>

                    <TitleButton>Iniciar</TitleButton>

                    <MaterialCommunityIcons name="location-enter" size={24} color="black" />

                </ButtonInit>

            </Container>

        </Wrapper>
    )
} 