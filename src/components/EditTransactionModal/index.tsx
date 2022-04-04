import { Container, TransactionTypeContainer, RadioBox } from "../Modal/styles";
import Modal from "react-modal";
import { FormEvent, useState } from "react";
import closeImg from "../../assets/close.svg";
import incomeImg from "../../assets/income.svg";
import outcomeImg from "../../assets/outcome.svg";
import { useTransactions } from "../../hooks/useTransactions";

interface EditTransactionModalProps {
    id: number;
    index: number;
    isOpen: boolean;
    onRequestClose: () => void;
    title: string;
    amount: number;
    category: string;
    type: string;
    createdAt: string;
}

export function EditTransactionModal({
    id,
    createdAt,
    index,
    isOpen,
    onRequestClose,
    title,
    amount,
    category,
    type,
}: EditTransactionModalProps) {
    const [newTitle, setTitle] = useState(title);
    const [newAmount, setAmount] = useState(amount);
    const [newCategory, setCategory] = useState(category);
    const [newType, setType] = useState(type);

    const { editTransaction } = useTransactions();

    function handleEditTransaction(event: FormEvent) {
        event.preventDefault();

        editTransaction(
            {
                id,
                title: newTitle,
                amount: newAmount,
                type: newType,
                category: newCategory,
                createdAt,
            },
            index
        );

        onRequestClose();
    }

    return (
        <Modal
            className="react-modal-content"
            overlayClassName="react-modal-overlay"
            isOpen={isOpen}
            onRequestClose={onRequestClose}
        >
            <button
                type="button"
                onClick={onRequestClose}
                className="react-modal-close"
            >
                <img src={closeImg} alt="Fechar modal" />
            </button>

            <Container onSubmit={handleEditTransaction}>
                <h2>Editar transação</h2>

                <input
                    placeholder="Título"
                    value={newTitle}
                    onChange={(event) => setTitle(event.target.value)}
                />

                <input
                    type="number"
                    placeholder="Valor"
                    value={newAmount}
                    onChange={(event) => setAmount(Number(event.target.value))}
                />

                <TransactionTypeContainer>
                    <RadioBox
                        type="button"
                        onClick={() => setType("deposit")}
                        isActive={newType === "deposit"}
                        activeColor="green"
                    >
                        <img src={incomeImg} alt="Entrada" />

                        <span>Entrada</span>
                    </RadioBox>

                    <RadioBox
                        type="button"
                        onClick={() => setType("withdraw")}
                        isActive={newType === "withdraw"}
                        activeColor="red"
                    >
                        <img src={outcomeImg} alt="Saída" />

                        <span>Saída</span>
                    </RadioBox>
                </TransactionTypeContainer>

                <input
                    placeholder="Categoria"
                    value={newCategory}
                    onChange={(event) => setCategory(event.target.value)}
                />

                <button type="submit">Editar</button>
            </Container>
        </Modal>
    );
}
