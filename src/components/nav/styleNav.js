import styled from 'styled-components';

export const Container = styled.nav`
    width: 90%;
    height: 70px;
    display: flex;
    align-items: center; 
    margin: 0 auto;
    border-radius: 0 0 25px 25px;
    background: rgb(32 26 57);
    background: linear-gradient(180deg, rgb(68 81 166) -86%, rgba(52,35,112,1) 91%);
    -webkit-box-shadow: -1px 15px 15px 4px rgba(67,35,148,0.3); 
    box-shadow: 0 8px 32px 0 rgb(0 0 0 / 61%);
`;

export const Ul = styled.ul`
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;

    li{
        font-weight: 700;
        font-size: 20px;
        color: #e5e5e5;
        cursor: pointer;

        :hover{
            color: rgb(255 147 18);
        }

        span{
            position: relative;
            left: -45px;
            padding: 12px 24px 13px 54px; 
            border-radius: 25px 25px 25px 25px;
            background-color: rgba(37,24,85, 50%);
        }
    }

    .logo{
        display: flex;
        align-items: center;
        gap: 8px;
    }
`;

export const Logo = styled.img`
    width: 100%;
    max-width: 50px;
`;


export const LogoText = styled.img`
    width: 100%;
    max-width: 160px;
`;

export const Metamask = styled.div`
    display: flex;
    align-items: center;

    img{
        min-width: 45px;
        border-radius: 50%;
        z-index: 1;
    }

`;