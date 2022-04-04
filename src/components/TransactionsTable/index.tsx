import { Container } from "./styles";
import { useTransactions } from "../../hooks/useTransactions";
import { Transaction } from "../Transaction";

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
                            <th>Ações</th>
                        </tr>
                    </thead>

                    <tbody>
                        {transactions.map((transaction, index) => (
                            <Transaction
                                index={index}
                                key={transaction.id}
                                id={transaction.id}
                                title={transaction.title}
                                type={transaction.type}
                                amount={transaction.amount}
                                category={transaction.category}
                                createdAt={transaction.createdAt}
                            />
                        ))}
                    </tbody>
                </table>
            </div>
        </Container>
    );
}
