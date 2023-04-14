import styled from "styled-components";

const ContainerComment = styled.section`
  display: flex;
  align-items: center;
  border-radius: 4px;
  align-items: "center";
  min-width: 752px;
  justify-content: "flex-start";
  margin-bottom: 73px;

  .username {
    margin: 0px;
  }

  .boxInput {
    border: 1px solid;
    border-color: var(--grey-7);
  }

  .boxInput:focus-within {
    border-color: var(--brand-1);
  }

  textarea {
    height: 77px;
    width: 100%;
    resize: unset;
    padding: 0 0 45px 10px;
  }

  textarea:focus {
    outline: 0;
  }

  .boxButtonsRecommends {
    @media (max-width: 540px) {
      flex-wrap: wrap;

      button:nth-child(3) {
        margin-top: 24px;
        margin-left: 0;
      }
    }
  }

  @media (max-width: 768px) {
    justify-content: center;
    min-width: 100%;
  }
`;
export default ContainerComment;
