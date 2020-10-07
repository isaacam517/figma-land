import styled from 'styled-components'
import logo from './img/logo.png'; 
import banner from './img/banner.png'; 

export const HeaderContainer = styled.div`
    width: 100vw;
    height:1300px;
    background-color: #252B42;
    background: linear-gradient(39.97deg, #EF2779 0.79%, #7834BE 79.29%);
    color: white;
    
`
export const DivTop = styled.div`
    display: flex;
    width: 100vw;
    justify-content: center;    
    flex-direction: row;
    align-items: center;
    text-align: center;
    gap: 16px;
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
            margin-right:2%;
           
            
        }
`
export const ImgLogo = styled.div`
    background-image: url(${logo});    
    width: 186px;
    height: 58px;
    margin: auto;
    margin-left: 10px;
    margin-top: 10px;
`
export const Input = styled.input`
    width: 273px;
    height: 54px;  
    background: #EFEFEF;
    border: 1px solid #E8E8E8;
    box-sizing: border-box;
    border-radius: 39px;
    padding-left:20px;
          
`
export const Button = styled.button`
    cursor: pointer;      
    width: 141px;
    height: 54px;     
    background: #FFFFFF;
    border-radius: 35px;
    border: none;
    margin: 20px 20px;    
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
`
export const DivBanner = styled.div`
    margin-top: 40px;
    display: flex;       
    flex-direction: row;    
`    
export const DivText = styled.div`
    margin-top: 100px;   
    flex-direction: column;    
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
`        
export const ButtonTry = styled.button`
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
export const DivColor =styled.div`
    background-color: #252B42;
    margin-top: -250px;
    height: 545px;    
`