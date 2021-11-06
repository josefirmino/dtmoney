import logoImg from "../../assets/logo.svg";

// Styled
import { Section, Container, HeaderDiv } from "./styles";

interface HeaderProps {
  onOpenNewTransitionModal: () => void;
}

export function Header({ onOpenNewTransitionModal }: HeaderProps) {
  return (
    <Section>
      <Container>
        <HeaderDiv>
          <img src={logoImg} alt="dt money" />
          <button type="button" onClick={onOpenNewTransitionModal}>
            Nova transação
          </button>
        </HeaderDiv>
      </Container>
    </Section>
  );
}
