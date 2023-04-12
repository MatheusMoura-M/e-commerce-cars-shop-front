import styled from "styled-components";

const ContainerHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;

  .menu-list_logged {
    transform: translate(0px, -7px) !important;

    @media (min-width: 1722px) {
      transform: translate(-127px, -7px) !important;
    }
  }
`;

export default ContainerHeader;
