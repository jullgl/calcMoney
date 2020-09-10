import React from "react";
const Total=({resultIncome, resultExpenses, totalBalance})=> (
    <section className="total">
            <header className="total__header">
                <h3>Balance</h3>
                <p className="total__balance">{totalBalance}$</p>
            </header>
            <div className="total__main">
                <div className="total__main-item total__income">
                    <h4>Income</h4>
                    <p className="total__money total__money-income">
                        {resultIncome} $
                    </p>
                </div>
                <div className="total__main-item total__expenses">
                    <h4>Expenditure</h4>
                    <p className="total__money total__money-expenses">
                        {resultExpenses}$
                    </p>
                </div>
            </div>
        </section>
)
export default Total;