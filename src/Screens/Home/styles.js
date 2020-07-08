import styled from 'styled-components/native';

export const Wrapper = styled.SafeAreaView`
    flex:1;
    background-color:#281336;
    align-items:center;
    justify-content:center;
`;

export const Container = styled.View`
    align-items:center;
    justify-content:center;
    padding-top:80px;
`;

export const Title = styled.Text`
    color:#fff;
    font-weight:bold;
    font-size:23px;
    margin-bottom:80px;
`;

export const Img = styled.Image`
    width:250px;
    height:250px;
`;

export const ButtonInit = styled.TouchableOpacity`
    background-color:#c5e3f6;
    margin-top:120px;
    width:300px;
    padding:15px 0;
    border-radius:10px;
    flex-direction:row;
    align-items:center;
    justify-content:center;
`;

export const TitleButton = styled.Text`
    font-weight:bold;
    font-size:16px;
    margin-right:10px;
`;