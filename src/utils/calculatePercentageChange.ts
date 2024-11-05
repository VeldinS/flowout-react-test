import { DataPoint } from '@/utils/types';

export function calculatePercentageChange(data: DataPoint[] | null, previousData: DataPoint[] | null): number {
    if (!data || !previousData || data.length < 7 || previousData.length < 7)
        return 0;
    const currentTotal = data.slice(-1)[0].value;
    const previousTotal = previousData.slice(-1)[0].value;
    return ((currentTotal - previousTotal) / previousTotal) * 100;
}
