import styled from 'styled-components'
import apiary from './img/apiary.png'; 
import android from './img/android.png'; 
import basecamp from './img/basecamp.png'; 

export const PartnersContainer = styled.div`
    width: 100vw;
    height: 1297px;
    background-color: #252B42;
    justify-content: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center; 
`
export const SecoundSection = styled.div`
    justify-content: center;
    display: flex;
    flex-direction: row;
    gap: 36px;
        p {
            width: 255px;
        }
`
export const H3 = styled.h3`
    width: 185px;
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 22px;
    line-height: 33px;   
    letter-spacing: 0.1px;
    color: #FFFFFF;
`
export const Img1 = styled.div`
    background-image: url(${apiary});    
    width: 123px;
    height: 122px;  
`
export const Img2 = styled.div`
    background-image: url(${android});    
    width: 100px;
    height: 117px;
`
export const Img3 = styled.div`
    background-image: url(${basecamp});    
    width: 106px;
    height: 89px;
`
export const SpanCol = styled.span`
    justify-content: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
`
export const SpanRow = styled.span`
    justify-content: center;
    display: flex;
    flex-direction: row;
`
export const P = styled.p`
    width:218px;    
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 27px;
    letter-spacing: 0.2px;
    color: #FFFFFF;
`