import styled from 'styled-components'
import gpsin from './img/gpsin.png'; 
import gpsout from './img/gpsout.png'; 
import fone from './img/fone.png'; 
import email from './img/email.png'; 
import twitter from './img/twitter.png'; 
import face from './img/face.png'; 
import linkedin from './img/linkedin.png'; 

export const P = styled.p`
    width:285px;    
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 27px;
    letter-spacing: 0.2px;
    color: #FFFFFF;
`
export const A = styled.a`
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 15px;
    line-height: 27px;
    letter-spacing: 0.2px;   
    margin: -5px 0px;
    text-decoration: none;
`
export const H1 = styled.h1`
    width: 321px;
    font-family: Roboto;
    font-style: normal;
    font-weight: 900;
    font-size: 55px;
    line-height: 65px;   
    letter-spacing: 0.2px;
    color: #FFFFFF;
    @media screen and (max-width:460px){
        

    }              
`
export const H2 = styled.h2`
    width:296px;    
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 46px;
    line-height: 57px;   
    letter-spacing: 0.2px;    
`
export const H3 = styled.h3`
    width: 277px;
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 22px;
    line-height: 33px;   
    letter-spacing: 0.1px;
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
    
`
export const H5 = styled.h5`
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 12px;
    line-height: 18px;
    letter-spacing: 0.1px;
`
export const ButtonTryBlue = styled.button`
    cursor: pointer;
    margin-top: 40px;
    width: 236px;
    height: 65px;
    background: #38A3F1;
    border-radius: 35px;
    border: none;    
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 22px;
    line-height: 33px;
    text-align: center;
    letter-spacing: 0.1px;
    color: #FFFFFF;        
`
export const ButtonTryWhite = styled.button`
    cursor: pointer;
    margin-top: 40px;
    width: 236px;
    height: 65px;
    background: #FFFFFF;
    border-radius: 35px;
    border: none;    
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 22px;
    line-height: 33px;
    text-align: center;
    letter-spacing: 0.1px;
    color: #38A3F1;        
`

/* Styled of Address is contact */

export const SectionContact = styled.div`
    justify-content: center;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 16px;
    @media screen and (max-width:460px){
        flex-direction: column-reverse;           
    }
`
export const SectionAddress = styled.div`
    
    margin-left: 30px;
    margin-top: 30px;
     

`
export const AreaContact = styled.div`    
    height: 280px;
    @media screen and (max-width:460px){
        display: flex;
        flex-direction: column-reverse;           
    } 
`
export const AreaIcon = styled.div`
    margin-top: 30px;
    margin-left:40px;    
    display: flex;
    flex-direction: row;    
    gap: 32px;
`
export const Icon = styled.div`
`
export const Address1 = styled.div`
    text-align: left;    
    display: flex;
    flex-direction: row;
    align-items: center;
`
export const Address2 = styled.div`
    height: 20px;
    text-align: left;   
    display: flex;
    flex-direction: row;
    align-items: center;
`
export const Address3 = styled.div`
    text-align: left;    
    display: flex;
    flex-direction: row;
    align-items: center;
`
export const ImgGpsIn = styled.div`
    background-image: url(${gpsin});    
    margin-left: 7px;
    width: 13px;
    height: 13px;      
`
export const ImgGpsOut = styled.div`
    cursor: pointer; 
    background-image: url(${gpsout});
    position: absolute;
    margin-top: -20px;
    width: 26px;
    height: 32.5px;  
`
export const TextAddress = styled.div`    
    margin-left: 20px;
`
export const ImgFone = styled.div`
    cursor: pointer; 
    background-image: url(${fone});    
    width: 22px;
    height: 32.5px;  
`
export const ImgEmail = styled.div`
    cursor: pointer; 
    background-image: url(${email});    
    width: 27px;
    height: 21px;  
`
export const ImgTwitter = styled.div`
    cursor: pointer; 
    background-image: url(${twitter});    
    width: 33px;
    height: 28px;  
`
export const ImgFace = styled.div`
    cursor: pointer; 
    background-image: url(${face});    
    width: 32px;
    height: 32px;  
`
export const ImgLinkedin = styled.div`
    cursor: pointer; 
    background-image: url(${linkedin});    
    width: 32px;
    height: 32px;  
`