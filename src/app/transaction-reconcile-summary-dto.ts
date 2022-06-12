import { TransactionReconcileResponseDto } from "./transaction-reconcile-response-dto";

export interface TransactionReconcileSummaryDto {
    fileOneTotalRecords: Number,
    fileTwoTotalRecords: Number,
    matchingRecords: Number,
    fileOneUnmatchedRecords: Number,
    fileTwoUnmatchedRecords: Number,
    transactionReconcileResponseDto: TransactionReconcileResponseDto[],
}