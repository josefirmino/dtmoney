import logoImg from "../../assets/logo.svg";

// Styled
import { Section, Container, HeaderDiv } from "./styles";

export function Header() {
  return (
    <Section>
      <Container>
        <HeaderDiv>
          <img src={logoImg} alt="dt money" />
          <button type="button">Nova transação</button>
        </HeaderDiv>
      </Container>
    </Section>
  );
}
