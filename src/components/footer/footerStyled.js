import styled from 'styled-components';

export const Container = styled.footer`
    padding: 0px 70px;
    font-family: "Nunito";
    
    div{
        display: flex;
        justify-content: space-evenly;
        flex-wrap: wrap;
    }

    p{
        font-style: normal;
        font-weight: 700;
        font-size: 16px;
        line-height: 25px;
        letter-spacing: 1px;
        color: rgba(255, 255, 255, 0.9);
        margin-bottom: 20px;
        margin-top: 50px;
    }

    h3{
        font-style: normal;
        font-weight: 700;
        font-size: 18px;
        line-height: 25px;
        letter-spacing: 1px;
        color: rgba(255, 255, 255, 0.9);
    }
`;

export const Bar = styled.footer`
    border: 1px solid rgba(255, 255, 255, 0.5);
    transform: rotate(-0.07deg);
    margin-bottom: 40px;
`;

export const Site = styled.div`
    display: flex;
    flex-direction: column;
    width: 33.33%;
    align-items: center;
    justify-content: center;
    h3{

        font-weight: 700;
        font-size: 18px;
        line-height: 25px;
        letter-spacing: 1px;
        color: rgba(255, 255, 255, 0.9);
    }

    li{
        font-style: normal;
        font-weight: 600;
        font-size: 18px;
        line-height: 25px;
        letter-spacing: 1px;
        list-style: outside;
        color: rgba(255, 255, 255, 0.9);
        margin-left: 20px;
    }
   
`;

export const Social = styled.div`
    width: 33.33%;
    display: flex;
    flex-direction: column;
    align-self: flex-start;
    gap: 20px;
    align-content: center;
    align-self: center;
    ul{
        display: flex;
        justify-content: space-evenly;
        max-width: 250px;
        
    }
`;

export const Logo = styled.div`
    width: 33.33%;
    display: flex;
    flex-direction: column;
    align-items: center;
    img{
        width: 100px;
    }
`;