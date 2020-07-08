import React,{useState} from 'react';

import {Modal} from 'react-native';

import Javascript from '../../Images/Languages/Javascript.png';
import PHP from '../../Images/Languages/PHP.png';
import Python from '../../Images/Languages/Python.png';
import CSharpe from '../../Images/Languages/CSharpe.png';
import Java from '../../Images/Languages/Java.png';
import C from '../../Images/Languages/C.png';
import Ruby from '../../Images/Languages/Ruby.png';
import Swift from '../../Images/Languages/Swift.png';

import {Wrapper,
        Container,
        Option,
        Img,
        Title,
} from './styles';

const items = [
    {
        key: String(Math.random()),
        id: 1,
        name: "Javascript",
        img: Javascript,
        creator: "Brendan Eich",
        country: "EUA",
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
        name: "PHP",
        img: PHP,
        creator: "Rasmus Lerdorf",
        country: "Groelândia",
        features:[
            "Velocidade e Robustez",
            "Orientação a Objetos",
            "Portabilidade",
            "Tipagem Dinâmica",
            "Open-Source",
            "Server-Side",
        ],
        mainFrameworks:[
            "Laravel",
            "Zend",
            "Phalcon",
            "CakePHP",
            "CodeIgniter"
        ],
    },

    {
        key: String(Math.random()),
        id: 3,
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

    {
        key: String(Math.random()),
        id: 4,
        name: "C#",
        img: CSharpe,
        creator: "Microsoft",
        country: "EUA",
        features:[
            "Orientação a Objetos",
            "Programação Funcional",
            "Interface",
            "Classes e Estruturas",
        ],
        mainFrameworks:[
            "",
        ],
    },
    {
        key: String(Math.random()),
        id: 5,
        name: "Java",
        img: Java,
        creator: "James Gosling",
        country: "Canadá",
        features:[
            "Orientação a Objetos",
            "Portabilidade",
            "Segurança",
            "Alta Performance",
            "Dinamismo",
        ],
        mainFrameworks:[
            "Blade",
            "Dropwizard",
            "Spring",
            "Grails",
            "Hibernate",
        ],
    },

    {
        key: String(Math.random()),
        id: 6,
        name: "C",
        img: C,
        creator: "Dennis Ritchie",
        country: "EUA",
        features:[
            "Portabilidade",
            "Modularidade",
            "Recursos de Baixo Nível",
            "Simplicidade",
            "Dinamismo",
        ],
        mainFrameworks:[
            "",
        ],
    },

    {
        key: String(Math.random()),
        id: 7,
        name: "Ruby",
        img: Ruby,
        creator: "Yukihiro Matsumoto",
        country: "Japão",
        features:[
            "Orientada a Objetos",
            "Programação Funcional",
            "Mixins",
            "CodeBlocks",
        ],
        mainFrameworks:[
            "Ruby on Rails",
            "Padrino ",
            "NYNY",
            "Grape",
            "Nancy",
        ],
    },

    {
        key: String(Math.random()),
        id: 8,
        name: "Swift",
        img: Swift,
        creator: "Chris Lattner",
        country: "EUA",
        features:[
            "Controle de acesso",
            "Tipagem opcional",
            "Tipagem de valor",
            "CodeBlocks",
        ],
        mainFrameworks:[
            "",
        ],
    },

]



export default function MainLanguages(){    
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState(null)
    function handleShowMoreInfo(item){
        setIsModalOpen(true);
        setSelectedOption(item.id);
    }

    return(
        <Wrapper>

            <Container>

                {items.map(item => (
                    <Option key={item.key} onPress={() => handleShowMoreInfo(item)}>
                        
                        <Img source={item.img} alt={item.name} />

                        <Title>{item.name}</Title>

                        {item.id === selectedOption ? 

                            <Modal
                            animationType="slide"
                            visible={isModalOpen}>

                                

                            </Modal>
                        
                        : null}

                    </Option>
                ))}

            </Container>

        </Wrapper>
    )
}