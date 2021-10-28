import styled from "styled-components";

export const Section = styled.section`
  display: flex;
  background-color: var(--Blue);
  height: 21.2rem;
  width: 100%;
`;

export const Container = styled.div`
  width: 100%;
  max-width: 112rem;
  margin: 0 auto;
  padding: 0 2.5rem;
`;

export const ContainerFluid = styled.div`
  width: 100%;
  max-width: 100%;
  padding: 0;
  margin: 0 auto;
`;

export const HeaderDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 3rem;

  button {
    padding: 1.2rem 3.2rem;
    background-color: var(--Blue-light);
    border: 0;
    border-radius: 0.5rem;

    font-weight: 600;
    color: var(--Shape);
    transition: all ease-in-out 0.3s;

    &:hover {
      filter: brightness(0.9);
    }
  }
`;
