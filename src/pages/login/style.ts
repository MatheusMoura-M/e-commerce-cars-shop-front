import styled from "styled-components";

export const ContainerLoginage = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  justify-content: space-between;
`;

export const ContainerFormLogin = styled.div`
  width: 90%;
  margin: 0 auto;
  padding: 2rem 1rem;
  border-radius: 4px;
  background: var(--grey-10);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1rem;

  > h1 {
    font-size: 1.5rem;
    font-weight: 500;
    color: var(--grey-0);
  }

  @media (min-width: 800px) {
    width: 70%;
  }
  @media (min-width: 1100px) {
    width: 50%;
  }
  @media (min-width: 1400px) {
    width: 40%;
    padding: 2rem 2rem;
    height: auto;
  }
  @media (min-width: 1600px) {
    width: 30%;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  position: relative;

  > label {
    font-size: 0.875rem;
    font-weight: 500;
    color: var(--grey-1);
  }

  > input {
    padding-bottom: 1rem;
    font-size: 1rem;
    font-weight: 400;
    color: var(--grey-3);
    padding: 1rem;
  }

  > div {
    max-height: 45px;
  }

  > p {
    font-size: 0.875rem;
    font-weight: 500;
    color: var(--grey-2);
    position: absolute;
    right: 2px;
    bottom: 210px;
    cursor: pointer;
  }

  > span {
    font-size: 0.625rem;
    color: var(--alert-1);
  }
  > h5 {
    width: max-content;
    margin: 0 auto;
    padding: 1rem 0;
  }
`;
