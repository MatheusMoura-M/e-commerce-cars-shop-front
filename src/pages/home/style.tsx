import styled from "styled-components";

export const ContainerHomePage = styled.div`

    width: 100%;

    @media (min-width: 1110px){
        width: 1110px;
        margin: 0 auto;
    }

    @media (min-width: 1450px){
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`

export const HomePanel = styled.section`
    height: 590px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    position: relative;
    background-image: url("src/assets/imgHome/carPanel.svg");
    background-size: 150%;
    background-repeat: no-repeat;
    background-position: center center;
    div{
        background: linear-gradient(180deg, rgba(0, 0, 0, 0.29) 0%, #000000 100%);
        position: absolute;
        height: 100%;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        color: white;
        h2{
            font-size: 2rem;
            font-weight: 500;
            margin: 80px 0px 20px;
        }
        p{
            text-align: center;
            font-weight: 500;
            width: 100%;
            font-size: 1.5rem;
            line-height: 30px;
        }
    }
    @media (min-width: 500px){
        height: 620px;
        background-size: 130%;
        background-position: -60px -20px;
        div{
            p{
                width: 95%;
            }
        }
    }
    @media (min-width: 570px){
        height: 620px;
        background-size: 100%;
        background-position: center center;
    }
    @media (min-width: 800px){
        height: 400px;
        div{
            justify-content: center;
            align-items: center;
            h2{
                margin: 0;
            }
        }
    }
    @media (min-width: 950px){
        background-size: 1000px;
    }
`

export const UlCardCars = styled.ul`
    display: flex;
    overflow-x: scroll;
    width: 97.5%;
    margin: 60px 0px 0px 15px;
    ::-webkit-scrollbar {
        width: 40px;
    }
    
    li{
        margin-left: 10px;
    }
    
    @media (min-width: 1077px){
        
        overflow: hidden;
        flex-wrap: wrap;
        flex-direction: row;
        justify-content: flex-start;
        align-content: flex-start;
        margin-left: 130px;
        
        li{
            height: 120px;
            min-height: 370px;
            margin: 0px 30px 40px 0px;
        }
    }

    @media (min-width: 1450px){
        width: 1190px;
    }
`

export const NumberPage = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    margin-top: 20px;
    margin-bottom: 10px;
    span{
        display: block;
        font-weight: 600;
        color: var(--grey-3);
    }
    span:nth-child(1){
        color: var(--grey-2);
        margin-right: 5px;
        font-weight: 600;
        font-size: 1rem;
    }
`
