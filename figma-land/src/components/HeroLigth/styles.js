import styled from 'styled-components'
import screen from './img/screen.png';
import screenbackground from './img/screenbackground.png';
import base from './img/base.png';
import basebottom from './img/basebottom.png';
import grip from './img/grip.png';


export const HeroContainer = styled.div`
    width: 100vw;
    height: 1271px;    
    background-color: #252B42;
    justify-content: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center; 
`
export const DivButton = styled.div`
    margin-bottom: 100px;
`
export const Screen = styled.div`
    background-image: url(${screen});    
    width: 798px;
    height: 497px;
    position: absolute;
    margin-top: 470px;
    
`
export const ScreenBackground = styled.div`
    background-image: url(${screenbackground});    
    width: 843px;
    height: 567px;
    display: flex;     
`
export const Base = styled.div`
    background-image: url(${base});    
    width: 1033px;
    height: 21px;
    display: flex;
    position: absolute;
    margin-top:1023px;     
`
export const BaseBottom = styled.div`
    background-image: url(${basebottom});    
    width: 1033px;
    height: 12px;
    display: flex;
    position: absolute;
    margin-top:1055px;     
`
export const Grip = styled.div`
    background-image: url(${grip});    
    width: 138px;
    height: 12px;
    display: flex;
    position: absolute;
    margin-top:1015px;     
`