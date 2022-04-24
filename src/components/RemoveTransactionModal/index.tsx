import { Container } from "../Modal/styles";
import Modal from "react-modal";
import { FormEvent, useState } from "react";
import closeImg from "../../assets/close.svg";
import { useTransactions } from "../../hooks/useTransactions";

interface RemoveTransactionModalProps {
    id: number;
    title: string;
    isOpen: boolean;
    onRequestClose: () => void;
}

export function RemoveTransactionModal({
    id,
    title,
    isOpen,
    onRequestClose,
}: RemoveTransactionModalProps) {
    const { removeTransaction } = useTransactions();

    function confirmRemoveTransaction(event: FormEvent) {
        event.preventDefault();

        removeTransaction(id);
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

            <Container onSubmit={confirmRemoveTransaction}>
                <h2>Remover transação</h2>

                <p>
                    Você tem certeza que deseja remover a transação{" "}
                    <strong>{title}</strong>?
                </p>

                <button type="submit" className="remove">Remover</button>
            </Container>
        </Modal>
    );
}
