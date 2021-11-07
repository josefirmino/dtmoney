import styled from "styled-components";
import { darken, transparentize } from "polished";

export const Container = styled.form`
  h2 {
    font-size: 2.4rem;
    line-height: 3.6rem;
    font-weight: 600;
    margin-bottom: 3.2rem;
    color: var(--Text-title);
  }

  input {
    width: 100%;
    background-color: #e7e9ee;
    color: var(--Text-title);
    border: 1px solid #d7d7d7;
    padding: 2rem 2.4rem;
    margin-bottom: 1.6rem;
    border-radius: 0.5rem;
    transition: all 0.5s;
    :focus {
      outline: none;
      border-color: rgba(51, 204, 149, 0.5);
    }

    ::placeholder {
      color: var(--Text-body);
      opacity: 1; /* Firefox */
    }

    :-ms-input-placeholder {
      /* Internet Explorer 10-11 */
      color: var(--Text-body);
    }

    ::-ms-input-placeholder {
      /* Microsoft Edge */
      color: var(--Text-body);
    }

    &[type="number"]::-webkit-inner-spin-button {
      -webkit-appearance: none;
    }

    &[type="number"] {
      -moz-appearance: textfield;
      appearance: textfield;
    }
  }

  button[type="submit"] {
    width: 100%;
    background-color: var(--Green);
    color: var(--Shape);
    padding: 2rem 0;
    border-radius: 0.5rem;
    transition: all 0.3s;
    margin-top: 0.8rem;
    font-weight: 600;
    &:hover {
      filter: brightness(0.9);
    }
  }
`;

export const TransactionTypeContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.8rem;
`;

interface RadioBoxProps {
  isActive: boolean;
  activeColor: "green" | "red";
}

const colors = {
  green: "#33CC95",
  red: "#E52E4D",
};

export const RadioBox = styled.button<RadioBoxProps>`
  display: flex;
  justify-content: center;
  align-items: center;

  background: ${(props) =>
    props.isActive
      ? transparentize(0.9, colors[props.activeColor])
      : "transparent"};

  border: 1.5px solid #d7d7d7;
  padding: 2rem 0;
  border-radius: 5px;
  color: var(--Text-title);

  margin-bottom: 1.6rem;

  transition: all 0.3s;

  &:hover {
    border-color: ${darken(0.1, "#d7d7d7")};
  }

  img {
    width: 2rem;
    height: 2rem;
  }

  span {
    font-size: 1.6rem;
    display: inline-block;
    margin-left: 1.6rem;
  }
`;
