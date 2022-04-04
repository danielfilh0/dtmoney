import {
    createContext,
    useEffect,
    useState,
    ReactNode,
    useContext,
} from "react";
import { api } from "../services/api";

interface Transaction {
    id: number;
    title: string;
    amount: number;
    type: string;
    category: string;
    createdAt: string;
}

type TransactionInput = Omit<Transaction, "id" | "createdAt">;

interface TransactionsProviderProps {
    children: ReactNode;
}

interface TransactionsContextData {
    transactions: Transaction[];
    createTransaction: (transaction: TransactionInput) => Promise<void>;
    removeTransaction: (id: number) => Promise<void>;
    editTransaction: (transaction: Transaction, index: number) => Promise<void>;
}

const TransactionsContext = createContext<TransactionsContextData>(
    {} as TransactionsContextData
);

export function TransactionsProvider({ children }: TransactionsProviderProps) {
    const [transactions, setTransactions] = useState<Transaction[]>([]);

    useEffect(() => {
        api.get("transactions").then((response) =>
            setTransactions(response.data.transactions)
        );
        console.log(transactions);
    }, []);

    async function createTransaction(transactionInput: TransactionInput) {
        const response = await api.post("/transactions", {
            ...transactionInput,
            createdAt: new Date(),
        });

        const { transaction } = response.data;

        setTransactions([...transactions, transaction]);
    }

    async function removeTransaction(id: number) {
        const newTransactionsList = transactions.filter(
            (transaction) => transaction.id !== id
        );

        await api.post("/transactions", {
            newTransactionsList,
        });

        setTransactions([...newTransactionsList]);
    }

    async function editTransaction(transaction: Transaction, index: number) {
        const atualizedTransactions = transactions.fill(
            transaction,
            index,
            index + 1,
        );

        await api.post("/transactions", {
            atualizedTransactions,
        });

        setTransactions([...atualizedTransactions]);
    }

    return (
        <TransactionsContext.Provider
            value={{
                transactions,
                createTransaction,
                removeTransaction,
                editTransaction,
            }}
        >
            {children}
        </TransactionsContext.Provider>
    );
}

export function useTransactions() {
    const context = useContext(TransactionsContext);

    return context;
}
