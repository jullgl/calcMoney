import React from "react";
import HistoryItem from "./HistoryItem";
const History=({transactions,deleteTransaction})=> (
<section className="history">
    <h3>Expense History</h3>
    <ul className="history__list">
        {transactions.map(item=>
            <HistoryItem transaction={item}
                         key={item.id}
                         deleteTransaction={deleteTransaction}
            />)}
    </ul>
</section>
)
export default History;