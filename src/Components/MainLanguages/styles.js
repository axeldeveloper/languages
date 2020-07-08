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

export const WrapperImage = styled.View`
    align-items:center;
    justify-content:center;
`;

export const ImageModal = styled.Image`
    width:100px;
    height:100px;
`;

export const WrapperModal = styled.View`
    flex:1
    background-color:#281336;
    margin-top:20px;
    border-top-left-radius:65px;
    border-top-right-radius:65px;
`;

export const WrapperTitleModal = styled.View`
    margin-top:50px;
    align-items:center;
    margin-bottom:50px;
`;

export const TitleModal = styled.Text`
    color:#fff;
    font-weight:bold;
    font-size:25px;
`;

export const WrapperTopic = styled.View`
    margin-top:20px;
    padding:0 15px;
`;

export const TitleTopic = styled.Text`
    color:#fff;
    font-weight:bold;
    font-size:20px;
`;

export const WrapperGoBackButton = styled.View`
    align-items:center;
    justify-content:center;
    margin-top:90px;
`;

export const GoBackButton = styled.TouchableOpacity`
    background-color:#c5e3f6;
    width:85%;
    padding:15px 0;
    border-radius:10px;
    flex-direction:row;
    align-items:center;
    justify-content:center;
`;

export const TileGoBackButton = styled.Text`
    font-weight:bold;
    font-size:18px;
    margin-left:10px;
    color:#281336;
`;

