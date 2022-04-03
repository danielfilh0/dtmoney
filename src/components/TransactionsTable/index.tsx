import { Container } from "./styles";
import { formatCurrency, formatDate } from "../../utils/formatData";
import { useTransactions } from "../../hooks/useTransactions";
import { MdDelete } from "react-icons/md";

export function TransactionsTable() {
    const { transactions, removeTransaction } = useTransactions();

    function confirmRemoveTransaction(item: string, id: Number) {
        const confirm = window.confirm(
            `Você tem certeza que deseja remover ${item}?`
        );

        if (confirm) {
            removeTransaction(id);
        }
    }

    return (
        <Container>
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>Título</th>
                            <th>Valor</th>
                            <th>Categoria</th>
                            <th>Data</th>
                            <th>Ações</th>
                        </tr>
                    </thead>

                    <tbody>
                        {transactions.map((transaction) => (
                            <tr key={transaction.id}>
                                <td>{transaction.title}</td>
                                <td className={transaction.type}>
                                    {formatCurrency(transaction.amount)}
                                </td>
                                <td>{transaction.category}</td>
                                <td>{formatDate(transaction.createdAt)}</td>
                                <td className="actions">
                                    <button
                                        onClick={() =>
                                            confirmRemoveTransaction(
                                                transaction.title,
                                                transaction.id
                                            )
                                        }
                                    >
                                        <MdDelete />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </Container>
    );
}
