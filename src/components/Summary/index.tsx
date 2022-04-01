import incomeImg from "../../assets/income.svg";
import outcomeImg from "../../assets/outcome.svg";
import dolarImg from "../../assets/dolar.svg";
import { Container } from "./styles";
import { TransactionsContext } from "../../TransactionsContext";
import { useContext } from "react";

export function Summary() {
    const { transactions } = useContext(TransactionsContext);

    const summary = transactions.reduce(
        (acc, transaction) => {
            if (transaction.type === "deposit") {
                acc.deposits += transaction.amount;
                acc.total += transaction.amount;
            } else {
                acc.withdraws += transaction.amount;
                acc.total -= transaction.amount;
            }

            return acc;
        },
        {
            deposits: 0,
            withdraws: 0,
            total: 0,
        }
    );

    console.log(transactions);

    return (
        <Container>
            <div>
                <header>
                    <p>Entradas</p>

                    <img src={incomeImg} alt="Entradas" />
                </header>

                <strong>{summary.deposits}</strong>
            </div>

            <div>
                <header>
                    <p>Saídas</p>

                    <img src={outcomeImg} alt="Saídas" />
                </header>

                <strong>- {summary.withdraws}</strong>
            </div>

            <div className="highlight-background">
                <header>
                    <p>Total</p>

                    <img src={dolarImg} alt="Total" />
                </header>

                <strong>{summary.total}</strong>
            </div>
        </Container>
    );
}
