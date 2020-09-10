import React from "react";

const Operation=({addTransaction, addDescription, addAmount, description,amount})=> (
    <section className="operation">
        <h3>New operation</h3>
        <form id="form">
            <label>
                <input type="text" onChange={addDescription} value={description}
                       className="operation__fields operation__name"
                       placeholder="Name operation"
                />
            </label>
            <label>
                <input type="number" onChange={addAmount} value={amount}
                       className="operation__fields operation__amount"
                       placeholder="Enter the amount"
                />
            </label>
            <div className="operation__btns">
                <button onClick={()=>addTransaction(false)}
                        type="button"
                        className="operation__btn operation__btn-subtract">
                    Expenditure</button>
                <button onClick={()=>addTransaction(true)}
                        type="button"
                        className="operation__btn operation__btn-add">
                    Income</button>
            </div>
        </form>
    </section>
)
export default Operation;