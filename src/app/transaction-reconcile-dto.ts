export interface TransactionReconcileDto {
    transactionDate: Date,
    transactionAmount: Number,
    transactionNarrative: String,
    transactionDescription: String,
    transactionID: String,
    transactionType: Number,
    lineNumber: Number,
    walletReference: String,
}