export type RentalType = {
    id: number;
    bookId: number;
    userId: string;
    state: "貸し出し中" | "返却中";
    borrowDate: string;
    returnDate: string | null | undefined;
    createdAt: string;
    updatedAt: string;
};
