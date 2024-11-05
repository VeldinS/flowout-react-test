export const fetchGraphData = async () => {
    const res = await fetch('/api/graph-data');
    if (!res.ok) {
        throw new Error('Failed to fetch graph data');
    }
    return res.json();
};
