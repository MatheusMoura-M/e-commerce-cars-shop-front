import styled from "styled-components";

const ContainerDetailCard = styled.section`
  background: #f7f7f7;
  background: linear-gradient(
    180deg,
    #4529e6 31.25%,
    #f1f3f5 31.26%,
    #f1f3f5 100%
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
      width: 95%;
      border-radius: 5px;
      font-size: 14px;
    }
  }
`;
export default ContainerDetailCard;
