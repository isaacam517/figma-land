import styled from 'styled-components'
import img1 from './img/img1.png'; 
import img2 from './img/img2.png'; 
import img3 from './img/img3.png';


export const FeaturesContainer = styled.div`
    padding-top: 150px;
    width: 100vw;
    height: 612px;
    background-color: #252B42;
    color: white;
    @media screen and (max-width:460px){        
        margin-top: -2px;
        height: 1012px;        
    } 
`
export const FirstSection = styled.div`
    justify-content: center;
    display: flex;
    flex-direction: column;
    align-items: center;
        
`
export const SecoundSection = styled.div`
    justify-content: center;
    display: flex;
    flex-direction: row;
    gap: 36px;
        p {
            width: 255px;
        }
        @media screen and (max-width:460px){  
        flex-direction: column;
        margin-top: 30px;
        p {
            margin-left: 110px;
            width: 50vw;
        }
                           
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
export const H2 = styled.h2`
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 46px;
    line-height: 57px;   
    letter-spacing: 0.2px;
    color: #FFFFFF;
`
export const H4 = styled.h4`
    width: 298px;
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 20px;
    text-align: center;
    letter-spacing: 0.2px;
    color: #FFFFFF;
`
export const Img1 = styled.div`
    background-image: url(${img1});    
    width: 45px;
    height: 45px;
    @media screen and (max-width:460px){        
        margin-top: 20px;               
    }   
`
export const Img2 = styled.div`
    background-image: url(${img2});    
    width: 45px;
    height: 45px;
    @media screen and (max-width:460px){        
        margin-top: 20px;               
    } 
`
export const Img3 = styled.div`
    background-image: url(${img3});    
    width: 45px;
    height: 45px;
    @media screen and (max-width:460px){        
        margin-top: 20px;               
    } 
`
export const SpanCol = styled.span`
    justify-content: center;
    display: flex;
    flex-direction: column;
    @media screen and (max-width:460px){        
        p {
            width: 70vw;
            margin-left: auto;
            margin-right: auto;
        }       
    } 
`
export const SpanRow = styled.span`
    justify-content: center;
    display: flex;
    flex-direction: row;
`