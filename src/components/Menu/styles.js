import {StyleSheet, Animated} from 'react-native'
import styled from "styled-components/native"

export const Container = styled(Animated.ScrollView).attrs({
    showsVerticalScrollIndicator: false
})`
    margin: 0 30px;
`
export const Code = styled.View`
    background-color: #ddd;
    padding: 10px;
    border-radius: 4px;
    align-self: center;
`
export const QRcode = styled.View`
    width: 80px;
    height: 80px;
    background-color: #fff;
    border-radius: 4px;
`
export const Nav = styled.View`
    margin-top: 30px;
    border-top-width: ${StyleSheet.hairlineWidth}px;
    border-top-color: rgba(255,255,255,.8);
    align-self: stretch;
`
export const NavItem = styled.View`
    flex-direction: row;
    align-items: center;
    padding: 10px 0;
    border-bottom-width: ${StyleSheet.hairlineWidth}px;
    border-bottom-color: rgba(255,255,255,.8);
`
export const NavText = styled.Text`
    font-size: 15px;
    color: #FFF;
    margin-left: 20px;
`
export const SignOutButton = styled.TouchableOpacity`
    border-width: ${StyleSheet.hairlineWidth}px;
    border-color: rgba(255,255,255,.8);
    padding: 12px;
    justify-content: center;
    align-items: center;
    margin-top: 15px;
`
export const SignOutButtonText = styled.Text`
    font-size: 13px;
    color: #FFF;
    font-weight: bold;
`





