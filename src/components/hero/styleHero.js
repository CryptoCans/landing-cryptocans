import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`;

export const ContainerAds = styled.div`
    grid-area: ads;
`;

export const Main = styled.div`
    width: 90%;
    margin: 0 auto;
    display: flex;
`;

export const Details = styled.div`
    position: relative;
    grid-area: details;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    width: 50%;
    height: 600px;

    div{
        display: flex;
        flex-direction: column;
        h1{
            color: white;
            font-size: 80px;
            font-weight: 800;
            letter-spacing: 1px;
            font-family: "Nunito";
            max-width: 800px;
            text-shadow: -9px -2px 43px rgb(90 195 197);
            margin: 0;
        }
        p{
            margin-top: 40px;
            /* font-family: "Rubik Glitch"; */
            font-size: 22px;
            /* font-weight: 100; */
            color: #b4feff;
            max-width: 500px;
        }
    }
`;

export const Picture = styled.div`
    grid-area: picture;
    position: relative;
    display: grid;
    justify-content: center;
    margin-top: 50px;
    width: 50%;
    /* img{
        position: absolute;
        width: 700px;
        top: 0px;
        right: -800px;
        max-height: 400px;
        margin: 40px;
        z-index: -1;
    } */

    div{
        width: 450px;
        height: 350px;
        background: rgb(98 91 151 / 40%);
        box-shadow: 0 8px 32px 0 rgb(0 0 0 / 61%);
        backdrop-filter: blur( 3px );
        -webkit-backdrop-filter: blur( 20px );
        border-radius: 25px;
        /* border: 1px solid rgba( 255, 255, 255, 0.18 ); */
        border: none;
        position: relative;
        overflow: hidden;

        .humo{
            position: absolute;
            width: 800px;
            z-index: 5;
            right: -160px;
        }
    }

    img{
        width: 600px;
        position: absolute;
        z-index: 4;
    }

`;

export const Networck = styled.section`
    width: 500px;
    padding: 20px;
    height: 40px;
    background-color: white;
    z-index: 5;
    backdrop-filter: blur(3px);
    justify-self: flex-start;
    position: absolute;
    left: 80px;
    bottom: 60px;
    border-radius: 25px;
`;

export const ContainerBtn = styled.section`
    display: flex;
    width: 100%;
    gap: 10px 10px;
    button{
        width:300px;
        height: 80px;
        padding: 20px;
        cursor: pointer;
        color: rgb(37,24,85);
        background-color: #d061b4;
        border: none;
        font-family: "Press Start 2P";
        font-size: 18px;
        font-weight: 100;
        /* border-radius: 25px; */
        border-radius:18% 15% 10% 71% / 100% 32% 75% 49%;
        box-shadow: 0px 0px 17px 12px rgb(228 124 166 / 16%);
        transition: margin-top 0.2s;
        position: relative;
    }

    .trade{
        background-color: #53f9fb;
        box-shadow: 0px 0px 17px 12px rgb(83 142 139 / 41%);
        :hover{
            color: #53f9fb;
            border: 4px solid #53f9fb;
            background-color: transparent;
            margin-top: -10px;
        }
    }

    .whitepaper{
        :hover{
            color: #d061b4;
            border: 4px solid #d061b4;
            background-color: transparent;
            margin-top: -10px;
        }
    }
`;