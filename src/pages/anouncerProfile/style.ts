import styled from "styled-components";

export const ContainerProfile = styled.section`
  background: linear-gradient(
    180deg,
    #4529e6 370px,
    #f7f7f7 50px,
    #f7f7f7 50px
  );
  height: auto;
  display: flex;
  margin: 0 auto;
  flex-direction: column;
  max-width: 1450px;

  .aboutKmYear-container {
    span {
      color: var(--brand-1);
      background-color: var(--brand-4);
      font-weight: 500;
      padding: 5px 10px;
      white-space: nowrap;
      width: max-content;
      border-radius: 5px;
      font-size: 14px;
    }
  }
`;

export const ContainerSallerInfo = styled.div`

  width: 90%;

  @media (min-width: 1200px){

    width: 1000px;

  }

`
export const UlCardCars = styled.ul`
    display: flex;
    overflow-x: scroll;
    width: 95.5%;
    height: 450px;
    margin: 60px 0px 0px 15px;
    ::-webkit-scrollbar {
        width: 40px;
    }
  
    /* gap: 20px; //retirar */
    
    li{
        margin-left: 10px;
    }
    
    @media (min-width: 1110px){
        
        overflow: hidden;
        flex-wrap: wrap;
        flex-direction: row;
        justify-content: flex-start;
        align-content: flex-start;
        width: 1000px;
        height: auto;
        margin: 60px 0px 0px 0px;
        gap: 20px;

        
        li{
          height: auto;
          min-height: 370px;
          margin-bottom: 10px;
        }
    }

    @media (min-width: 1450px){
      width: 1350px;
    }
`

export const NumberPage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  margin-top: 40px;
  span {
    display: block;
    font-weight: 600;
    color: var(--grey-3);
  }
  span:nth-child(1) {
    color: var(--grey-2);
    margin-right: 5px;
    font-weight: 600;
    font-size: 1rem;
  }
`;
