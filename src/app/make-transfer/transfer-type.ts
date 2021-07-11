
export interface Dates {
    valueDate: any;
}

export interface AmountCurrency {
    amount: any;
    currencyCode: string;
}

export interface Transaction {
    amountCurrency: AmountCurrency;
    type: string;
    creditDebitIndicator: string;
}

export interface Merchant {
    name: string;
    accountNumber: string;
}

export interface ITransactionObject {
    categoryCode: string;
    dates: Dates;
    transaction: Transaction;
    merchant: Merchant;
}

export interface ITransactionPayload {
    data: ITransactionObject[];
}


