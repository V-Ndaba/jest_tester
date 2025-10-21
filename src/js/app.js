let transactions = [];
let totals = {income: 0, expense: 0, balance: 0};

function addTransaction(transaction){
    const {detail, amount, type} = transaction;

    if(arguments.length !== 1)
        throw new Error("Invalid arguments");

    if(!detail || !amount || amount < 0 || !type)
        throw new Error("Invalid transaction");

    //Successful transaction so add an ID

    //transactions.push({id: Date.now}, ...transaction);

    transactions.push({id: Date.now(), detail, amount, type})
};

function removeTransaction(id){
    if(arguments.length !== 1)
        throw new Error("Invalid arguments");

    if(isNaN(id))
        throw new Error("Invalid ID");

    transactions.pop();
}

function calculate(){
    
}

export {transactions, totals, addTransaction, removeTransaction, calculate};