import { NextResponse } from 'next/server';

interface DataPoint {
    timestamp: string;
    value: number;
}

const generateRandomData = (): DataPoint[] => {
    const data: DataPoint[] = [];
    const now = new Date();
    for (let i = 6; i >= 0; i--) {
        const date = new Date(now);
        date.setDate(now.getDate() - i);
        data.push({
            timestamp: date.toISOString(),
            value: Math.floor(Math.random() * 100) + 1
        });
    }
    return data;
};

export async function GET() {
    const data = generateRandomData();
    return NextResponse.json(data);
}
