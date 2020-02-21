import React, { FC, useEffect, useState } from "react";
import { getTransactions } from "./services/transactionService";
import SimpleTable from "./components/SimpleTable/SimpleTable";
import { Transaction } from "./types/transaction";
import Loader from "./images/loader.gif";
import "./App.scss";

const App: FC = () => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    (async () => {
      const transactions = await getTransactions();
      console.log("transactions", transactions);
      setTransactions(transactions);
    })();
  }, []);

  return (
    <div className="App">
      <h1>Today's Transactions</h1>
      {transactions.length ? (
        <SimpleTable data={transactions} />
      ) : (
        <p className="loader">
          <img src={Loader} alt="Loader" />
        </p>
      )}
    </div>
  );
};

export default App;
