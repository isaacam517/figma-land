import styled from 'styled-components'
import map from './img/map.png'; 

export const FooterContainer = styled.div`
    width: 100vw;
    height: 507px;
    background-color: #252B42;
    color: white;
    justify-content: center;
    display: flex;
    flex-direction: row;
    align-items: center;
    text-align: center;
    @media screen and (max-width:460px){
        height: 1108px;
        flex-direction: column;           
    }
`
export const SectionPages = styled.div`
    display: flex;
    flex-direction: column;
    align-items: left;
    gap:18px;
    text-align: left;
    @media screen and (max-width:460px){
        text-align: center;
        padding-bottom: 20px;
    }
`
export const Location = styled.div`
    
`
export const AddressFooter = styled.div`
    margin-left: 30px;
    @media screen and (max-width:460px){
        margin-left: 0;                   
    }
`
export const Map = styled.div`
    cursor: pointer; 
    background-image: url(${map});    
    width: 472px;
    height: 247px;
    @media screen and (max-width:460px){
        background-size: 100% 100%;
        height: 247px;
        width: 90vw;
                   
    }  
`
