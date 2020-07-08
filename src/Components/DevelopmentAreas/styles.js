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
    margin-top:5px;
    margin-bottom:25px;
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

export const ButtonCloseModal = styled.TouchableOpacity`
    width:45px;
    padding:10px;
    align-items:center;
    justify-content:center;
`;

export const WrapperImageModal = styled.View`
    align-items:center;
    justify-content:center;
`;

export const ImageModal = styled.Image`
    width:250px;
    height:150px;
`;

export const WrapperBottomModal = styled.View`
    flex:1;
    background-color:#281336;
    margin-top:20px;
    border-top-right-radius:65px;
    border-top-left-radius:65px;
`;

export const WrapperTitleModal = styled.View`
    margin-top:50px;
    align-items:center;
    justify-content:center;
`;

export const TitleModal = styled.Text`
    color:#fff;
    font-weight:bold;
    font-size:25px;
`;

export const WrapperDescriptions = styled.View`
    padding:0 15px;
    margin-top:25px;
`;

export const Descriptions = styled.Text`
    color:#fff;
    font-size:16px;
    font-weight:bold;
    margin-top:25px;
`;

export const WrapperSecondButtonCloseModal = styled.View`
    align-items:center;
    justify-content:center;
    margin-top:120px;
`;

export const SecondButtonCloseModal = styled.TouchableOpacity`
    background-color:#c5e3f6;
    width:85%;
    padding:15px 0;
    border-radius:10px;
    flex-direction:row;
    align-items:center;
    justify-content:center;
`;

export const TitleSecondButtonCloseModal = styled.Text`
    font-weight:bold;
    font-size:18px;
    margin-left:10px;
    color:#281336;
`;