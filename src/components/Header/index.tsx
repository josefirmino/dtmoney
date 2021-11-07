import logoImg from "../../assets/logo.svg";

// Styled
import * as S from "./styles";

interface HeaderProps {
  onOpenNewTransitionModal: () => void;
}

export function Header({ onOpenNewTransitionModal }: HeaderProps) {
  return (
    <S.Section>
      <S.Container>
        <S.HeaderDiv>
          <img src={logoImg} alt="dt money" />
          <button type="button" onClick={onOpenNewTransitionModal}>
            Nova transação
          </button>
        </S.HeaderDiv>
      </S.Container>
    </S.Section>
  );
}
