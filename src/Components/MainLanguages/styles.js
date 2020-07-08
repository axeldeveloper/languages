import styled from 'styled-components/native';

export const Wrapper = styled.View`
    margin-top:10px;
    align-items:center;
    padding:0 10px;
`;

export const Container = styled.ScrollView.attrs(() => ({
    horizontal:true,
    showsHorizontalScrollIndicator: false,
}))`
`;

export const Option = styled.TouchableOpacity`
    background-color:#281336;
    width:80px;
    padding:40px 0;
    margin-right:10px;
    margin-left:10px;
    border-radius:15px;
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

export const ButtonCloseModal = styled.TouchableOpacity`
    width:40px;
    padding:5px
    align-items:center;
    justify-content:center;
`;

export const WrapperImage = styled.View``;

export const ImageModal = styled.Image``;

export const WrapperModal = styled.View`
    flex:1
    background-color:#281336;
    margin-top:150px;
    border-top-left-radius:25px;
    border-top-right-radius:25px;
` 

