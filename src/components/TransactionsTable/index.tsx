import { useContext } from "react";
import { TransactionsContext } from "../../TransactionsContext";
import { Container } from "./styles";
import { formatCurrency, formatDate } from '../../utils/formatData';

export function TransactionsTable() {
    const { transactions } = useContext(TransactionsContext);

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
                                <td>
                                    {formatDate(transaction.createdAt)}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </Container>
    );
}
