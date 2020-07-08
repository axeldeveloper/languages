import React from 'react';

import {Title, Img} from './styles';

import Javascript from '../../Images/Languages/Javascript.png';
import PHP from '../../Images/Languages/PHP.png';
import Python from '../../Images/Languages/Python.png';
import CSharpe from '../../Images/Languages/CSharpe.png';
import Java from '../../Images/Languages/Java.png';
import C from '../../Images/Languages/C.png';
import Ruby from '../../Images/Languages/Ruby.png';
import Swift from '../../Images/Languages/Swift.png';
import CPlus from '../../Images/Languages/CPlus.png';

const items = [
    {
        key: String(Math.random()),
        id: 1,
        name: "Javascript",
        img: Javascript,
        creator: "Brendan Eich",
        country: "Eua",
        features:[
            "Suporte Universal",
            "Imperativa e Estruturada",
            "Dinâmica",
            "Baseada em Objetos",
            "Funcional",
        ],
        mainFrameworks:[
            "React",
            "Vue",
            "Angular",
            "React Native",
            "Node"
        ],
    },
    {
        key: String(Math.random()),
        id: 2,
        name: "Python",
        img: Python,
        creator: "Guido van Rossum",
        country: "Holanda",
        features:[
            "Facilidade",
            "Democracia",
            "Simplicidade",
            "Robustez",
            "Eficácia",
        ],
        mainFrameworks:[
            "Django",
            "Flask",
            "Web2py",
            "CherryPy",
            "Bottle"
        ],
    },


]

export default function MainLanguages(){
    return(
        <Title>Teste</Title>
    )
}