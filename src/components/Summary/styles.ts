import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  width: 100%;
  max-width: 112rem;
  margin: 0 auto;
  padding: 0 2.5rem;
  .header-card {
    width: 100%;
    max-width: 34rem;
    min-height: 13.5rem;
    border-radius: 0.5rem;
    background-color: var(--Shape);
    padding: 2.4rem 1.8rem 1.8rem 3.2rem;
    margin-top: -7rem;

    &:not(:first-child) {
      margin-left: 2rem;
    }

    header {
      display: flex;
      justify-content: space-between;
      p {
        color: var(--Text-title);
      }
    }

    strong {
      display: block;
      margin-top: 1.4rem;
      font-size: 3.6rem;
      line-height: 5.4rem;
      color: var(--Text-title);
    }

    &.active {
      background-color: var(--Green);
      header {
        display: flex;
        justify-content: space-between;
        p {
          color: var(--Shape);
        }
      }
      strong {
        color: var(--Shape);
      }
    }
  }
`;
