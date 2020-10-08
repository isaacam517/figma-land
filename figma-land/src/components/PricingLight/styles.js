import styled from 'styled-components' 

export const PrincingContainer = styled.div`
    width: 100vw;
    height: 734px;
    background-color: #252B42;    
    justify-content: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    color: #FFFFFF;
    @media screen and (max-width:460px){
        height: 1589px;
        margin-top: -2px;
           
    }

`
export const SectionCard = styled.div`    
    display: flex;
    flex-direction: row;    
    gap: 50px;
    @media screen and (max-width:460px){
        flex-direction: column;           
    }
    
`
export const Card = styled.span`
    background-color: #FFFFFF;
    color:#252B42;
    width: 305px;
    height: 280px;
    padding: 30px;
    margin-top:50px;
    display: flex;
    flex-direction: column;
    border-radius: 10px;
    text-align:left;
    @media screen and (max-width:460px){
        width:65vw;           
    }
`
export const CardRight = styled.span`
    background: linear-gradient(39.97deg, #EF2779 0.79%, #7834BE 79.29%);
    width: 305px;
    height: 280px;
    padding: 30px;
    margin-top:50px;     
    display: flex;
    flex-direction: column;
    border-radius: 10px;
    text-align:left;
    color: #FFFFFF;
    @media screen and (max-width:460px){
        width:65vw;           
    }
`
export const SectionPricing = styled.span`    
    display: flex;
    flex-direction: row;
`
export const Pricing = styled.span`
    width: 200px;    
    display: flex;
    flex-direction: row;   
`
export const SpanPricing = styled.span`    
    display: flex;
    flex-direction: column;
    margin-top:20px;    
    margin-left: 5px;
    text-align: left;
`
export const ButtonCard = styled.button`
    cursor: pointer;
    width: 255px;
    height: 52px;
    margin: 20px;
    background: #38A3F1;
    border-radius: 35px;
    border: none;    
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 33px;
    text-align: center;
    letter-spacing: 0.1px;
    color: #FFFFFF;
    @media screen and (max-width:460px){
        width:55vw;           
    }        
` 
export const ButtonCardRight = styled.button`
    cursor: pointer;
    width: 255px;
    height: 52px;
    margin: 20px;
    background: #FFFFFF;
    border-radius: 35px;
    border: none;    
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 33px;
    text-align: center;
    letter-spacing: 0.1px;
    color: #EF2779;
    @media screen and (max-width:460px){
        width:55vw;           
    }         
` 
export const H5 = styled.h5`
    margin: -5px 0px;
    width: 181px;
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 12px;
    line-height: 18px;
    letter-spacing: 0.1px;
    @media screen and (max-width:460px){
        width: 50vw;
           
    }
`
export const H1 = styled.h1`
    margin-left: 30px;
    width: 70px;
    height: 66px;
    font-family: Roboto;
    font-style: normal;
    font-weight: 900;
    font-size: 55px;
    line-height: 65px;   
    letter-spacing: 0.2px;
`
export const H3 = styled.h3`
    width: 13px;
    margin-bottom: 5px;
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 22px;
    line-height: 33px;   
    letter-spacing: 0.1px;    
`
export const CardTitle = styled.span`
   margin-left: 20px;    
`