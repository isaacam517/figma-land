import styled from 'styled-components' 

export const CTAContainer = styled.div`
    width: 100vw;
    height: 571px;
    background-color: #252B42;
    justify-content: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    color: #FFFFFF;
    @media screen and (max-width:460px){
        margin-top: -1px;      
    } 
`
export const InputEmail = styled.input`
    width: 353px;
    height: 54px;  
    background: #EFEFEF;
    border: 1px solid #E8E8E8;
    box-sizing: border-box;
    border-radius: 39px;
    padding-left:20px;
    @media screen and (max-width:460px){
        width:76vw;      
    }          
`
export const Button = styled.button`
    cursor: pointer;      
    width: 353px;
    height: 50px;     
    background: #EF2779;
    border-radius: 35px;
    border: none;
    margin: 20px 20px;    
    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 16px;
    letter-spacing: 0.2px;
    color: #FFFFFF;
    @media screen and (max-width:460px){
        width:76vw;      
    }           
`
export const H2Mobile = styled.h2`
    font-size:0.1px;
    @media screen and (max-width:460px){
        width:296px;    
        font-family: Roboto;
        font-style: normal;
        font-weight: normal;
        font-size: 46px;
        line-height: 57px;   
        letter-spacing: 0.2px;        
    }    
`
export const H2Desktop = styled.h2`
    width:296px;    
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 46px;
    line-height: 57px;   
    letter-spacing: 0.2px;
    @media screen and (max-width:460px){
        display: none;      
    }    
`