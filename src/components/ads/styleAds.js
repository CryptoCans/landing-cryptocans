import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    height: 70px;
    margin-top: 25px;
    background: linear-gradient(264deg,rgba(255,255,255, 14%) 10%,rgba(255,255,255,0.4) 50%,rgb(255 124 21) 100%);
    border-top: 1px solid #53f9fb;
    border-bottom: 1px solid #53f9fb;

    .get-pass{
        font-size: 24px;
        font-weight: 900;
        color: #ffffff;
        text-shadow: -2px 2px 5px rgb(0 0 0);
    }
`;

export const ContainerPass = styled.div`
    display: flex;
    align-items: center;
    gap: 0 15px;

    img{
        max-width: 80px;
    }
`;

export const Contract = styled.div`
    display: flex;
    flex-direction: column;
    gap: 3px 0;

    h3{
        font-size: 10px;
        font-family: 'Press Start 2P', cursive;
        color: white;
    }
    div{
        display: flex;
        align-items: center;

        .copy{
            cursor: pointer;
            :hover{
                color: rgb(255 147 18);
            }
        }

    }

`;

export const ContainerAddres = styled.div`
    padding: 10px;
    background-color: #1f1f1f66;
    font-size: 10px;
    letter-spacing: 2px;
    color: white;
    font-family: 'Orbitron', sans-serif;
    font-weight: 600;
    border-radius: 15px;
    display: flex;
    gap: 0 10px;
    align-items: center;

`;