export function generateRandomDates() {
    const start = new Date();
    const end = new Date();
    start.setDate(start.getDate() - Math.floor(Math.random() * 30));
    end.setDate(end.getDate() - Math.floor(Math.random() * 30));
    const formattedStart = start.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
    const formattedEnd = end.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
    return `${formattedStart} - ${formattedEnd}`;
}
