import styled from 'styled-components'
import dropbox from './img/dropbox.png'; 
import ellipse from './img/ellipse.png'; 


export const TestimonialsContainer = styled.div`
    width: 100vw;
    height: 759px;
    background-color: #252B42;
    color: white;
    justify-content: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    @media screen and (max-width:460px){
        height: 789px;
        padding-top: 90px;
        margin-top: -2px;
           
    }
`
export const H4 = styled.h4`
    width: 683px;
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 20px;
    text-align: center;
    letter-spacing: 0.2px;
    color: #FFFFFF;
    @media screen and (max-width:460px){
        margin-top: 80px;
        width: 280px;    
    }
`
export const H5 = styled.h5`
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 12px;
    line-height: 18px;
    letter-spacing: 0.1px;
    color: #FFFFFF;
    margin-bottom: 5px;
`
export const ImgDropBox = styled.div`
    background-image: url(${dropbox});
    margin-top: 80px;    
    width: 229px;
    height: 46px;  
`
export const ImgEllipse = styled.div`
    background-image: url(${ellipse});
    margin-top:45px;    
    width: 50px;
    height: 50px;  
`
export const ButtonMore = styled.button`
    cursor: pointer;
    margin-top: 40px;
    width: 280px;
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
export const Section = styled.span`    
    display: flex;
    flex-direction: row;
`
export const SectionUI = styled.span`    
    display: flex;
    flex-direction: column;    
    margin: 30px 10px;
    text-align: left;
        a { 
            color: #FFFFFF; 
        }         

`