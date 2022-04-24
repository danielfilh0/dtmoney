import { FormEvent, useState } from "react";
import { MdDelete, MdEdit } from "react-icons/md";
import { useTransactions } from "../../hooks/useTransactions";
import { formatCurrency, formatDate } from "../../utils/formatData";
import { Container } from "./styles";
import { EditTransactionModal } from "../EditTransactionModal";
import { RemoveTransactionModal } from "../RemoveTransactionModal";

interface TransactionProps {
    index: number;
    id: number;
    title: string;
    type: string;
    amount: number;
    category: string;
    createdAt: string;
}

export function Transaction({
    index,
    id,
    title,
    type,
    amount,
    category,
    createdAt,
}: TransactionProps) {
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [isRemoveModalOpen, setIsRemoveModalOpen] = useState(false);

    return (
        <Container>
            <td>{title}</td>

            <td className={type}>{formatCurrency(amount)}</td>

            <td>{category}</td>

            <td>{formatDate(createdAt)}</td>

            <td className="actions">
                <button onClick={() => setIsEditModalOpen(true)}>
                    <MdEdit />
                </button>

                <button onClick={() => setIsRemoveModalOpen(true)}>
                    <MdDelete />
                </button>
            </td>

            <EditTransactionModal
                index={index}
                isOpen={isEditModalOpen}
                onRequestClose={() => setIsEditModalOpen(false)}
                title={title}
                type={type}
                amount={amount}
                category={category}
                createdAt={createdAt}
                id={id}
            />

            <RemoveTransactionModal
                id={id}
                title={title}
                isOpen={isRemoveModalOpen}
                onRequestClose={() => setIsRemoveModalOpen(false)}
            />
        </Container>
    );
}
