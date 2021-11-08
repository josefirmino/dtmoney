import { FormEvent, useState } from "react";
import { useTransactions } from "../../hooks/useTransactions";
import Modal from "react-modal";

import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

import * as S from "./styles";

import incomeImg from "../../assets/income.svg";
import outcomeImg from "../../assets/outcome.svg";
import closeImg from "../../assets/close.svg";

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal({
  isOpen,
  onRequestClose,
}: NewTransactionModalProps) {
  const { createTransaction } = useTransactions();

  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState(0);
  const [category, setCategory] = useState("");

  const [type, setType] = useState("deposit");

  async function handleCrateNewTransaction(event: FormEvent) {
    event.preventDefault();

    await createTransaction({
      title,
      amount,
      category,
      type,
    });

    // Resetando o valor dos inputs
    setTitle("");
    setAmount(0);
    setCategory("");
    setType("deposit");

    // Fechando o modal
    onRequestClose();

    const AlertForm = withReactContent(Swal);

    await AlertForm.fire({
      title: <h2>Transação cadastrada com sucesso</h2>,
      icon: "success",
    });
  }

  return (
    <Modal
      closeTimeoutMS={200}
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button
        type="button"
        onClick={onRequestClose}
        className="react-modal-close"
      >
        <img src={closeImg} alt="Fechar modal" />
      </button>

      <S.Container onSubmit={handleCrateNewTransaction}>
        <h2>Cadastrar transação</h2>

        <input
          placeholder="Título"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          required
        />

        <input
          type="number"
          placeholder="Valor"
          value={amount}
          onChange={(event) => setAmount(Number(event.target.value))}
          required
        />

        <S.TransactionTypeContainer>
          <S.RadioBox
            isActive={type === "deposit"}
            activeColor="green"
            type="button"
            onClick={() => {
              setType("deposit");
            }}
          >
            <img src={incomeImg} alt="Entrada" />
            <span>Entrada</span>
          </S.RadioBox>

          <S.RadioBox
            isActive={type === "withdraw"}
            type="button"
            activeColor="red"
            onClick={() => {
              setType("withdraw");
            }}
          >
            <img src={outcomeImg} alt="Saída" />
            <span>Saída</span>
          </S.RadioBox>
        </S.TransactionTypeContainer>

        <input
          placeholder="Categoria"
          value={category}
          onChange={(event) => setCategory(event.target.value)}
          required
        />

        <button type="submit">Cadastrar</button>
      </S.Container>
    </Modal>
  );
}
