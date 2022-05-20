import styled from 'styled-components';

export const NftContainer = styled.div`
    font-family: "Nunito";
    padding: 0 70px;
    display: flex;
    flex-direction: column;
    margin-top: 50px;

    @media (max-width: 576px) {
        padding: 0 20px;
    }
    
    img{
        width: 60px;
    }

`;

export const Title = styled.div`

    width: 100%;

    h2{
        font-size: 40px;
        font-weight: 900;
        line-height: 100px;
        text-transform: uppercase;
        /* text-shadow: -9px -2px 43px rgba(90, 195, 197, 50%); */
        color: white;
        @media (max-width: 768px) {
            font-size: 7vw;
            line-height: 50px;
        }

    }
`;

export const Content = styled.div`
    font-weight: 500;
    font-size: 30px;
    line-height: 45px;
    color: #FFFFFF;

    @media (max-width: 768px) {
            font-size: 4vw;
            line-height: 35px;
            padding: 0 20px;
        }
`;

export const Text = styled.div`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
`;

export const Bar = styled.div`
    width: 100%;
    height: 3px;
    margin: 10px 0;
    background-color: #5ae1f1;
`;

export const Cards = styled.div`
    display: flex;
    padding: 100px 0;
`;

export const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

export const MainContainer = styled.div`
    width: 50%;
    display: flex;
    justify-content: center;

    @media (max-width: 768px) {
        width: 100%;
    }

    @media (max-width: 1250px) {
        display: none;   
    }

    @media (max-width: 1350px) {
            width: 40%;
    }

`;

export const Card = styled.div`
    display: flex;
    flex-direction: column;
    width: 340px;
    gap: 40px;
    background-color: rgb(70 55 188 / 40%);
    backdrop-filter: blur(20px);
    box-shadow: 0 8px 32px 0 rgb(0 0 0 / 61%);
    border-radius: 25px;
    border: 2px solid #6C45F7;
    img{
        width: 300px;
        z-index: 1;
    }
`;

export const CardHead = styled.div`
    position: relative;
    display: grid;
    justify-content: center; 
    padding-top: 25px;
    margin-top: -50px;
    h2{
        position: absolute;
        z-index: 1;
        font-weight: 900;
        font-size: 30px;
        line-height: 50px;
        color: #FFFFFF;
        left: 30px;
        bottom: 20px;
    }

    img{
        border:  2px solid #6C45F7;
        border-radius: 25px;
        box-shadow: 0 8px 32px 0 rgb(0 0 0 / 61%);
    }
`;


export const ContainerCard = styled.div`
    display: flex;
    width: 60%;
    flex-wrap: wrap;
    justify-content: flex-end;
    gap: 60px 60px;

    @media (max-width: 768px) {
        display: flex !important;
    }

    @media (max-width: 1250px) {
        display: grid;
        width: 100%;
        grid-template-areas: "col1 col2"
                             "col3 col4";

        .col-1{grid-area: col1}
        .col-2{grid-area: col2}
        .col-3{grid-area: col3}
        .col-4{grid-area: col4}

        .card-legendary{
            display: flex !important;        
        }
    }

    @media (max-width: 1350px) {
        gap: 60px 15px;
        justify-content: center;
    }

    .card-legendary{
        display: none;        
    }

`;

export const CardMain = styled.div`
    display: flex;
    flex-direction: column;
    gap: 50px;
    width: 500px;
    height: 640px;
    border-radius: 25px;
    background-color: rgb(70 55 188 / 40%);
    box-shadow: 0 8px 32px 0 rgb(0 0 0 / 61%);
    border: 2px solid #6C45F7;

    .h2-legendary{
        font-size: 40px;
    }

    img{
        width: 450px;
        z-index: 1;
    }

`;

export const CardBody = styled.div`
    display: flex;
    justify-content: center;
    padding: 0 25px 25px 25px;
`;

export const Mint = styled.div`

    width: 50%;

    p{
        font-weight: 500;
        font-size: 16px;
        line-height: 22px;
        color: #FFFFFF;
    }
`;

export const Price = styled.div`

    width: 50%;
    text-align: end;
    display: flex;
    flex-direction: column;
    gap: 20px;

    p {
        font-size: 40px;
        font-weight: 500;
        line-height: 22px;
        color: #FFFFFF;
    }

    div {

        display: flex;
        gap: 15px;
        justify-content: end;

        p{
            font-size: 20px;
        }

        img{
            width: 20px;
        }

    }
`;

export const BarCommon = styled.div`
    bottom: 0px;
    position: absolute;
    width: 250px;
    height: 7px;
    background: #7fffff;
    box-shadow: 0px 6px 17px rgba(35, 47, 225, 0.4);
    border-radius: 20px 20px 0px 0px;
    justify-self: center;
    z-index: 1; 
`;

export const BarRare = styled.div`
    bottom: 0px;
    position: absolute;
    width: 250px;
    height: 7px;
    background: #c94545;
    box-shadow: 0px 6px 17px rgba(18, 116, 9, 0.4);
    border-radius: 20px 20px 0px 0px;    justify-self: center;
    z-index: 1; 
`;

export const BarEpic = styled.div`
    bottom: 0px;
    position: absolute;
    width: 250px;
    height: 7px;
    background: #d014b8;
    box-shadow: 0px 6px 17px rgba(255, 33, 33, 0.4);
    border-radius: 20px 20px 0px 0px;
    justify-self: center;
    z-index: 1; 
`;

export const BarLegendary = styled.div`
    bottom: 0px;
    position: absolute;
    width: 400px;
    height: 7px;
    background: #89ff84;
    box-shadow: 0px 6px 17px rgba(254, 135, 20, 0.4);
    border-radius: 20px 20px 0px 0px;
    justify-self: center;
    z-index: 1; 

    @media (max-width: 1250px) {
        width: 250px;
    }

`;

export const ButtonCommon = styled.a`
    display: block;
    text-align: center;
    width: 50px;
    /* background: linear-gradient(90deg, #19E5F2 2.23%, #232FE1 99.17%);
    box-shadow: 0px 6px 17px rgba(35, 47, 225, 0.4);
    border-radius: 50px; */
    border: none;

    padding: 7px 20px;
    font-weight: 900;
    font-size: 16px;
    line-height: 20px;
    color: #FFFFFF;
    cursor: pointer;
    text-decoration: none;

    &:hover{
        color: rgba(255, 255, 255, 1) !important;
        box-shadow: 8px 8px 32px rgba(0, 0, 0, 0.4);
        transition: all 0.2s ease;
    }
`

export const ButtonRare = styled.a`
    display: block;
    text-align: center;
    width: 50px;
    /* background: linear-gradient(90deg, #1EFC0A 0.19%, #127209 100.19%);
    box-shadow: 0px 6px 17px rgba(18, 116, 9, 0.4);
    border-radius: 50px; */
    border: none;
    padding: 7px 20px;
    font-weight: 900;
    font-size: 16px;
    line-height: 20px;
    color: #FFFFFF;
    cursor: pointer;
    text-decoration: none;

    &:hover{
        color: rgba(255, 255, 255, 1) !important;
        box-shadow: 4px 8px 32px rgba(18, 116, 9, 0.4);
        transition: all 0.2s ease;
    }
`

export const ButtonEpic = styled.a`
    display: block;
    text-align: center;
    width: 50px;
    /* background: linear-gradient(90deg, #FF2121 2.42%, #89121C 100%);
    box-shadow: 0px 6px 17px rgba(255, 33, 33, 0.4);
    border-radius: 50px; */
    border: none;
    padding: 7px 20px;
    font-weight: 900;
    font-size: 16px;
    line-height: 20px;
    color: #FFFFFF;
    cursor: pointer;
    text-decoration: none;

    &:hover{
        color: rgba(255, 255, 255, 1) !important;
        box-shadow: 0 4px 32px rgba(254, 135, 20, 0.5);
        transition: all 0.2s ease;
    }
`

export const ButtonLegendary = styled.a`
    display: block;
    text-align: center;
    width: 50px;
    /* background: linear-gradient(90deg, #FF8915 0%, #BF2F00 100%);
    box-shadow: 0px 6px 17px rgba(254, 135, 20, 0.4);
    border-radius: 50px; */
    border: none;
    padding: 10px 30px;
    font-weight: 900;
    font-size: 16px;
    line-height: 20px;
    color: #FFFFFF;
    cursor: pointer;
    text-decoration: none;

    &:hover{
        color: rgba(255, 255, 255, 1) !important;
        box-shadow: 0 4px 32px rgba(254, 135, 20, 0.5);
        transition: all 0.2s ease;
    }
`