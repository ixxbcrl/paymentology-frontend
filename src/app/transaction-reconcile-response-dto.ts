import { TransactionReconcileDto } from "./transaction-reconcile-dto";

export interface TransactionReconcileResponseDto {
    sourceFile: String,
    unmatchedTransaction: TransactionReconcileDto,
    exactMatchTransaction: TransactionReconcileDto,
    closeMatches: TransactionReconcileDto[],
}