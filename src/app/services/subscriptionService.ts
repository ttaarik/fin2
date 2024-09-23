export const fetchSubscriptionData = async (id: string) => {
    const response = await fetch(`http://localhost:5024/Subscription/${id}`);
    if (!response.ok) {
        throw new Error("Failed to fetch subscription data");
    }
    return response.json();
};
