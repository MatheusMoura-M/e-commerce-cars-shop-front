import styled from "styled-components";

const LiCar = styled.li`
  background-color: var(--grey-10);
  min-width: 300px;
  max-width: 300px;
  height: auto;
  margin: 0px 10px 0px 0px;

  .container-image {
    background-color: var(--grey-7);
    position: relative;

    span {
      background-color: aqua;
      position: absolute;
      top: 0;
      right: 0;
      background-color: var(--random-7);
      display: flex;
      justify-content: center;
      align-items: center;
      height: 27px;
      width: 17px;
      border-radius: 3px;
      .money-icon {
        font-weight: 600;
        color: var(--whiteFixed);
        font-size: 17px;
      }
    }
  }

  .container-information {
    min-width: 0;
    h3 {
      font-weight: 600;
      padding-top: 20px;
      width: 97%;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    p {
      margin-top: 16px;
      color: var(--grey-2);
      font-size: 14px;
      line-height: 24px;
      font-weight: 400;
      width: 260px;
      display: inline;
      -webkit-line-clamp: 2;
      text-overflow: ellipsis;
      overflow: hidden;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      word-wrap: break-word;
    }
  }
  .container-plusInfromation {
    .plusInformation-containerUser {
      div {
        .user-container {
          display: flex;
          align-items: center;
          padding-top: 16px;
          span {
            font-size: 14px;
            font-weight: 500;
            color: var(--grey-2);
            margin-left: 10px;
          }
        }
      }
    }
    .aboutKmYear-container {
      margin-top: 19px;
      span {
        color: var(--brand-1);
        background-color: var(--brand-4);
        font-weight: 600;
        padding: 8px 12px;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
        width: 95%;
        border-radius: 5px;
        font-size: 14px;
      }
      p {
        margin-top: 16px;
        color: var(--grey-2);
        font-size: 14px;
        padding: 5px 7px;
        border-radius: 2px;
      }
      span:nth-child(2) {
        margin-left: 10px;
      }
    }
  }
`;

export { LiCar };
