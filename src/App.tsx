import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/global";
import { TransactionsTable } from "./components/TransactionsTable";

export function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Dashboard />
      <TransactionsTable />
    </>
  );
}

export default App;
