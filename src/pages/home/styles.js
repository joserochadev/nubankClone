import { Animated } from 'react-native'
import styled from 'styled-components/native'

export const Container = styled.SafeAreaView `
    flex: 1;
    background-color: #8b10ae;
    padding: 8px 14px;
`
export const Content = styled.View`
    flex: 1;
    max-width: 400px;
    z-index: 5;
`
export const Card = styled(Animated.View)`
    flex: 1;
    background-color: #fff;
    border-radius: 4px;
    height: 100%;
    margin: 0 15px;
    position: absolute;
    left: 0;
    right: 0;
    top: 0px;
    /* bottom: -330px; */
`
export const CardHeader = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
`
export const CardContent = styled.View`
    flex: 1;
    justify-content: center;
    padding: 0 20px;
`
export const Title = styled.Text`
    font-size: 13px;
    color: #999;
`
export const Description = styled.Text`
    font-size: 25px;
    /* font-weight: bold; */
    color: #333;
    margin-top: 10px;
`
export const CardFooter = styled.View`
    padding: 30px;
    background-color: #eee;
    border-radius: 4px;
`
export const Anotation = styled.Text`
    font-size: 12px;
    color: #333;
`












