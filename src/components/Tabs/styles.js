import { Animated } from "react-native"
import styled from "styled-components/native"

export const Container = styled(Animated.View)`
    height: 100px;
    margin-top: 20px ;
    margin-bottom: 20px;
`
export const TabContainer = styled.ScrollView.attrs({
    horizontal: true,
    contentContainerStyle: {paddingLeft: 10, paddingRight: 20},
    showsHorizontalScrollIndicator: false
})``
export const TabItem = styled.TouchableOpacity.attrs({activeOpacity:0.5})`
    width: 100px;
    height: 100px;
    background-color: rgba(255,255,255,.2);
    padding: 10px;
    margin-left: 10px;
    border-radius: 3px;
    justify-content: space-between;
`
export const TabText = styled.Text`
    font-size: 13px;
    color: #fff;
`








