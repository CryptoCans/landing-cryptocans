import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 150vh;
    display: flex;
    flex-direction: column;
    background: rgb(37 24 85);
    justify-content: center;
    align-items: center;
    gap: 40px 0;
`;

export const Card = styled.div`
    /* width: 60%;
    padding: 60px 80px;
    -webkit-box-shadow:0px 0px 244px 192px rgba(155,17,189,0.2);
    -moz-box-shadow: 0px 0px 244px 192px rgba(155,17,189,0.2);
    box-shadow: 0 8px 32px 0 rgb(0 0 0 / 61%);
    border-radius: 25px;
    /* border: 2px solid #53f9fb; */
    /* display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #f4f4f4;
    gap: 30px;
    background-color: #342278;
    font-family: "Nunito";
    border: 2px solid #6C45F7; 
    h2{
        font-weight: 900;
        font-size: 30px;
    }
    p{
        
        font-size: 20px;
        line-height: 25px;
    } */
    display: flex;
    justify-content: center;
    .card{
        width: 60%;
        padding: 60px 80px;
        -webkit-box-shadow:0px 0px 244px 192px rgba(155,17,189,0.2);
        -moz-box-shadow: 0px 0px 244px 192px rgba(155,17,189,0.2);
        box-shadow: 0 8px 32px 0 rgb(0 0 0 / 61%);
        border-radius: 25px;
        /* border: 2px solid #53f9fb; */
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        color: #f4f4f4;
        gap: 30px;
        background-color: #342278;
        font-family: "Nunito";
        border: 2px solid #6C45F7;
        h2{
            font-weight: 900;
            font-size: 30px;
        }
        p{
            
            font-size: 20px;
            line-height: 25px;
        }
    }
`;

export const Picture = styled.div`
div{
    /* width: 468px;
    height: 368px;
    display: grid;
    place-items: center;
    box-shadow:0 8px 32px 0 rgb(0 0 0 / 61%); */
    img{
        max-width: 500px;
    }
}
    
`;