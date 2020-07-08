import styled from 'styled-components/native';

export const Container = styled.View`
    align-items:center;
    justify-content:center;
    margin-top:50px;
`

export const Option = styled.TouchableOpacity`
    border:3px solid #281336;
    border-radius:10px;
    width:90%;
    padding:5px 10px;
    margin-top:15px;
    margin-bottom:15px;
    flex-direction:row;
    align-items:center;
    justify-content:space-between;
`;

export const TitleOption = styled.Text`
    color:#281336;
    font-weight:bold;
    font-size:16px;
`;

export const ImageOption = styled.Image`
    width:150px;
    height:100px;
`; 