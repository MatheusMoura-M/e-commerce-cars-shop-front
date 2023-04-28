import styled from "styled-components";

export const ContainerProfile = styled.section`
  background: linear-gradient(
    180deg,
    #4529e6 23.25%,
    #f7f7f7 23.26%,
    #f7f7f7 100%
  );
  height: 100%;
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

export const UlCardCars = styled.ul`
  display: flex;
  overflow-x: scroll;
  width: 80%;
  margin: 60px 0px 0px 0px;
  justify-content: space-between;
  ::-webkit-scrollbar {
    width: 40px;
  }

  @media (min-width: 1030px) {
    overflow: hidden;
    flex-wrap: wrap;
    flex-direction: row;

    li {
      height: 120px;
      min-height: 370px;
      margin-bottom: 30px;
    }
  }
`;

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
