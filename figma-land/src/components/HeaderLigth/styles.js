import styled from 'styled-components'
import logo from './img/logo.png'; 
import banner from './img/banner.png'; 
import bannermob from './img/bannermob.png'; 
import fundo1 from './img/rectangle9.png'; 
import fundo2 from './img/rectangle8.png'; 

export const HeaderContainer = styled.div`
    width: 100vw;
    height:790px;
    background-color: #252B42;
    background-image: url(${fundo2});
    background-size: 100% 100%; 
    color: white;
    @media screen and (max-width:460px){
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        height: 800px;       
    }    
`
export const SpanImg = styled.span`
       
`
export const SpanNav = styled.span`
    width: 880px;     
    a{
        text-decoration: none;
        color: #FFFFFF;
        position: static;
        font-family: Roboto;
        font-style: normal;
        font-weight: normal;
        font-size: 15px;
        line-height: 27px;
        text-align: center;
        letter-spacing: 0.2px;
        margin-right:1.5%;
        cursor: pointer;            
    }
    @media screen and (max-width:460px){
            display: none;
    }
`
export const DivTop = styled.div`
    display: flex;
    position: absolute; 
    width: 100vw;
    justify-content: space-between;        
    flex-direction: row;    
    text-align: center;
    margin-top: 15px;       
`
export const ImgLogo = styled.div`
    background-image: url(${logo});    
    width: 186px;
    height: 58px;
    margin-left: 16px;
    @media screen and (max-width:460px){               
        margin-left: 10%
    }     
`
export const Input = styled.input`
    width: 273px;
    height: 54px;  
    background: #EFEFEF;
    border: 1px solid #E8E8E8;
    box-sizing: border-box;
    border-radius: 39px;
    padding-left:20px;
    margin-right: 16px;
          
`
export const Button = styled.button`
    cursor: pointer;      
    width: 141px;
    height: 54px;     
    background: #FFFFFF;
    border-radius: 35px;
    border: none;      
    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 16px;
    letter-spacing: 0.2px;
    color: #EF2779;
`
export const ImgBanner = styled.div`
    background-image: url(${banner});
    background-size: 100% 100%;
    width: 890px;
    height: 820px;
    margin-top:70px;
    @media screen and (max-width:460px){
        background-image: url(${bannermob});               
        width: 90vw;
        height: 200px;        
    } 
`
export const DivBanner = styled.div`
    margin-top: -60px;
    display: flex;
    position: absolute;
    @media screen and (max-width:460px){
        margin-top: 150px; 
        width: 90vw;      
        text-align: center;
        flex-direction: column-reverse;
    } 

`    
export const DivText = styled.div`
    margin-top: 50px;     
    flex-direction: column;
    @media screen and (max-width:460px){        
        align-items: center;
        text-align: center;
        h1, h4{
            margin-left: 3.5vw;
        }
        button {
            margin-left: -35%;
        }     
    }  

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
        text-align: center;
        width: 80vw;        
    }           
`
export const H4 = styled.h4`
    position: static;
    width: 298px;    
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 20px;    
    letter-spacing: 0.2px;
    color: #FFFFFF;
    @media screen and (max-width:460px){
       width: 75vw;      
            
    }         
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
    @media screen and (max-width:460px){
        position: absolute;
        margin-top: 300px;
        width: 65vw;
        margin-left: -45%;        
            
    }         
`
export const DivColor =styled.div`
    background-image: url(${fundo1});     
    background-size: 100% 100%;
    position: absolute;    
    width: 100vw;
    height:670px;
`