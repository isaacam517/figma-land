import styled from 'styled-components';
import iconnav from './img/iconnav.png'; 
import fechar from './img/fechar.png'; 

export const MenuContainer = styled.div`    
     
    @media screen and (max-width:460px){
        margin-top: 20px;
    
    height: 200px;
    width: 90vw;
    background-color: #38A3F1;
    padding: 10px;
    transform: translate(98vw);
    position: absolute;
        &.open {
            transform: translate(0);
        }         
    }    
`
export const NavContainer = styled.nav`    
`
export const Button = styled.div`    
    width: 24px;
    height: 24px;
    border: none;    
    background-image: url(${fechar});
`
export const DivList = styled.div`
    display: flex;    
    flex-direction: column;
    gap: 24px;
    a {
        cursor: pointer;
        width: 64px;
        height: 19px;
        font-family: Montserrat;
        font-size: 22px;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: -0.22px;
        text-align: center;    
        color: #063447;
        padding: 2px;
        margin: 3%;
        text-decoration: none;  
        }
`
export const NavMenu = styled.span` 
    
    @media screen and (max-width:460px){
        cursor: pointer;
        position: absolute;
        background-image: url(${iconnav});
        width: 26px;
        height: 16px;
        margin-top: 8%;
        margin-left: 80%;
    }
`

