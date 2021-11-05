import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 112rem;
  margin: 0 auto;
  padding: 0 2.5rem;
  margin-top: 4rem;

  table {
    width: 100%;
    border-spacing: 0 0.5rem;

    th {
      color: var(--Text-body);
      font-weight: 400;
      padding: 1.6rem 3.2rem;
      text-align: left;
      line-height: 2.6rem;
    }

    tr {
      border-radius: 5rem !important;
      td {
        background-color: var(--Shape);
        padding: 1.6rem 3rem;
        border: 0;
        color: var(--Text-body);

        &.deposit {
          color: var(--Green);
        }

        &.withdraw {
          color: var(--Red);
        }

        &:first-child {
          border-top-left-radius: 0.5rem;
          border-bottom-left-radius: 0.5rem;
          color: var(--Text-title);
        }
        &:last-child {
          border-top-right-radius: 0.5rem;
          border-bottom-right-radius: 0.5rem;
        }
      }
    }
  }
`;
