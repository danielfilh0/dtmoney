import { Container } from "./styles";
import { formatCurrency, formatDate } from "../../utils/formatData";
import { useTransactions } from "../../hooks/useTransactions";

export function TransactionsTable() {
    const { transactions } = useTransactions();

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
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </Container>
    );
}
