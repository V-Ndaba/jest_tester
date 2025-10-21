import { transactions, totals, addTransaction, removeTransaction, calculate } from "../js/app";

describe('[transactions]', () => {
    it('should be defined', () =>{
        expect(transactions).toBeDefined();
    });

    it('should be an array', () => {
        expect(Array.isArray(transactions)).toBeTruthy();
    });

    it('should be an empty array', () =>{
        expect(transactions.length).toBe(0);
    });
    
});

describe('[addTransaction()]', () => {
    it('should be defined', () =>{
        expect(addTransaction).toBeDefined();
    });

    it('should be a function', () => {
        expect(typeof addTransaction).toBe('function');
    });

    it('should receive a single args', () => {
        let mock = {type: 'in', amount: '233', details: 'asdnkj'};
        expect(() => {
            addTransaction(mock, 1)
        }).toThrow(/Invalid arguments/);
    });

    it('should throw on an invalid transaction', () => {
        const mockTransaction = {type: 'expense', amount: 123324, detail: ''};
        expect(() => {
            addTransaction(mockTransaction)
        }).toThrow(/Invalid transaction/);
    });

    it('should successfully add a transaction', () => {
        const mockTransaction = {type: 'expense', amount: 123324, detail: 'Rent'};
        addTransaction(mockTransaction);
        expect(transactions.length).toBe(1);
    })
});

describe('[removeTransaction]', () =>{
    it('should be a function', () =>{
        expect(typeof removeTransaction).toBe('function');  
    });

    it('should throw on args <> 1', () =>{
        expect(() => {
            removeTransaction("sad", "asf");
        }).toThrow(/Invalid arguments/);
    });

    it('should throw on an invalid ID argument', () => {
        expect(() => {
            removeTransaction("faush")
        }).toThrow(/Invalid ID/);
    });

    it('should remove a transaction', () => {
        let count = transactions.length;
        removeTransaction(124);
        expect(transactions.length).toBe(count - 1);
    });

});

describe('[calculate]', () => {
    it('should be a function', () => {
        expect(typeof calculate).toBe('function');
    });

    it('', () => {
        
    })
});