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
    color: #FFFFFF;
    @media screen and (max-width:460px){
        margin-top: -2px;
        height: 769px;        
    } 

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
    @media screen and (max-width:460px){
        background-size: 100% 100%;
        width: 64vw;
        height: 182px;
                
    }      
`
export const ScreenBackground = styled.div`
    background-image: url(${screenbackground});    
    width: 843px;
    height: 567px;
    display: flex;
    @media screen and (max-width:460px){
        background-size: 100% 100%;
        width: 68vw;
        height: 208px;                
    }         
`
export const Base = styled.div`
    background-image: url(${base});    
    width: 1033px;
    height: 21px;
    display: flex;
    position: absolute;
    margin-top:1023px;
    @media screen and (max-width:460px){
        background-size: 100% 100%;        
        width: 82vw;
        height: 8px;
        margin-top:690px;                
    }       
`
export const BaseBottom = styled.div`
    background-image: url(${basebottom});        
    width: 1033px;
    height: 12px;
    display: flex;
    position: absolute;
    margin-top:1055px;
    @media screen and (max-width:460px){  
        background-size: 100% 100%;      
        width: 82vw;
        height: 8px;
        margin-top:700px;                
    }       
`
export const Grip = styled.div`
    background-image: url(${grip});    
    width: 138px;
    height: 12px;
    display: flex;
    position: absolute;
    margin-top:1015px;
    @media screen and (max-width:460px){  
        background-size: 100% 100%;      
        width: 50px;
        height: 4px;
        margin-top:684px;                
    }       
`