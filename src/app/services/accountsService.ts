export const fetchAccountsData = async (id: string) => {
    const response = await fetch(`http://localhost:5024/Account/${id}`);
    if (!response.ok) {
        throw new Error("Failed to fetch accounts data");
    }
    return response.json();
};


