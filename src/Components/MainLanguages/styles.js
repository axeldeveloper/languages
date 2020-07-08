import styled from 'styled-components/native';

export const Wrapper = styled.View`
    background-color:#ff1493;
`;

export const Container = styled.ScrollView.attrs(() => ({
    horizontal:true,
    showsHorizontalScrollIndicator: false,
}))`
    background-color:#2690e7;
`

export const Option = styled.TouchableOpacity`
    background-color:#281336;
    width:80px;
    padding:40px 0;
    margin-right:10px;
    margin-left:10px;
    border-radius:30px;
    align-items:center;
`;

export const Img = styled.Image`
    width:50px;
    height:50px;
    margin-bottom:10px;
`;

export const Title = styled.Text`
    color:#fff;
`;