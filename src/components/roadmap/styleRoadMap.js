import styled from 'styled-components';

export const Container = styled.div`
    padding-top: 100px;
    display: grid;
    place-items: center;
    font-family: "Nunito";
    color: white;
    gap: 50px;

    h2{
        font-size: 40px;
        font-weight: 900;
        /* text-shadow: -9px -2px 43px rgb(90 195 197); */
    }
`;

export const ContainerRoad = styled.div`
    display: flex;
    gap: 0 120px;

    div{
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    .ball-1{top: 50px}
    .ball-4{top: 210px}
    .ball-3{top: 490px}
    .ball-2{top: 770px}
`;


export const Bar = styled.div`
    width: 5px;
    height: 850px;
    background-color: #ffffff1f;
    border-radius: 5px;
    box-shadow: 0 8px 32px 0 rgb(0 0 0 / 61%);
    margin-top: -80px;
`;

export const Ball = styled.div`
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background-color: #ffffff1f;
    position: absolute;
    left: -12px;
`;

export const Timer = styled.div`
    height: 250px;
    font-size: 22px;
    color: aliceblue;
    text-align: end;
    display: flex;
    flex-direction: column;

    h4{
        font-size: 28px;
    }
`;

export const List = styled.div`
    height: 250px;
    width: 350px;

    div{
        border: 2px solid #6C45F7;
        background-color: #342278;
        box-shadow: 0 8px 32px 0 rgb(0 0 0 / 61%);
        padding: 30px;
        border-radius: 25px;
        line-height: 20px;
    }
`;
