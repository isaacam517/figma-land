import styled from 'styled-components'



export const ContactContainer = styled.div`
    width: 100vw;
    height: 794.38px;
    background-color: #D6EBFF;
    color:#252B42;
    justify-content: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    @media screen and (max-width:460px){
        height: 1510px;           
    }
`
export const AreaInput = styled.div`
    background-color: #FFFFFF;
    color:#252B42;
    width: 305px;
    height: 280px;
    padding: 30px;
    margin-top:50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 10px;
    gap: 16px;
    @media screen and (max-width:460px){
        gap: 32px;
        width: 75vw;
        height: 630px;           
    }     
`
export const Input = styled.input`
    width: 318px;
    height: 35px;  
    background: #F5F5F5;
    border: 1px solid #E8E8E8;
    box-sizing: border-box;
    border-radius: 39px;
    @media screen and (max-width:460px){
        width: 75vw;
        height: 54px;           
    }     
`
export const TextArea = styled.textarea`
    width: 318px;
    height: 126px;  
    background: #F5F5F5;;
    border: 1px solid #EFEFEF;
    box-sizing: border-box;
    @media screen and (max-width:460px){
        width: 75vw;
        height: 280px;           
    }         
`
export const DivButton = styled.div`
    display: flex;
    flex-direction: row-reverse;
    width: 318px;
    @media screen and (max-width:460px){
        width: 75vw;
        flex-direction: row;                      
    }   
`
export const Button = styled.button`
    cursor: pointer;      
    width: 94px;
    height: 34px;         
    background: #EF2779;
    border-radius: 35px;
    border: none;    
    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 16px;
    letter-spacing: 0.2px;
    color: #FFFFFF;
    @media screen and (max-width:460px){
        margin-top: 25px;           
    }   
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
    @media screen and (max-width:460px){
        font-family: Roboto;
        font-style: normal;
        font-weight: bold;
        font-size: 22px;
        line-height: 33px;   
        letter-spacing: 0.1px;
        color: #252B42;           
    }  
`


