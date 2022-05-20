import styled from 'styled-components';

export const Container = styled.div`
    font-family: "Nunito";
    color: white;
    display: flex;
    justify-content: center;
    gap: 80px;
    margin-top: 200px;
    margin-bottom: 100px;


    .item-2{
        display: flex;
        flex-direction: column;
        gap: 80px;
        h2{
            text-align: center;
            font-size: 40px;
            font-weight: 900;
            /* text-shadow: -9px -2px 43px rgb(90 195 197); */
        }
        
    }

`;

export const Card = styled.div`
    width: 200px;
    height: 300px;
    border: 2px solid #6C45F7;
    border-radius: 25px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 40px;
    background-color: #342278;
    box-shadow: 0 8px 32px 0 rgb(0 0 0 / 61%);
    justify-content: center;
    gap: 30px;
    h3, p{
        text-align: start;
    }

    img{
        width: 100%;
        max-width: 200px;
        height: 200px;
        background-color: #251855;
        border-radius: 50%;
        /* position: absolute; */
    }

`;

export const ContainerCard = styled.div`
    display: flex;
    gap: 80px;
`;

export const Text = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`;