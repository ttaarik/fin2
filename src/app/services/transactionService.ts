export const fetchTransactionData = async (id: string) => {
    const response = await fetch(`http://localhost:5024/Transaction/${id}`);
    if (!response.ok) {
        throw new Error("Failed to fetch transaction data");
    }
    return response.json();
};
