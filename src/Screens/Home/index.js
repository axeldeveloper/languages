import React from 'react';

import {StatusBar} from 'react-native';

import { MaterialCommunityIcons } from '@expo/vector-icons';

import Developer from '../../Images/HomeScreen/developer.png';

import {Wrapper,
        Container,
        Title,
        Img,
        ButtonInit,
        TitleButton,
} from './styles';

export default function Home({navigation}){
    return(
        <>

            <StatusBar backgroundColor="#281336" barStyle="light-content" />

            <Wrapper>

                <Container>

                    <Title>Linguagens de Programação</Title>

                    <Img source={Developer} alt="Desenvolvedor" />

                    <ButtonInit onPress={() => navigation.navigate('Main')}>

                        <TitleButton>Iniciar</TitleButton>

                        <MaterialCommunityIcons name="location-enter" size={24} color="black" />

                    </ButtonInit>

                </Container>

            </Wrapper>

        </>
    )
} 