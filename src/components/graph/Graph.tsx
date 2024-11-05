'use client';

import { useQuery } from '@tanstack/react-query';
import { useState, useEffect } from 'react';
import { fetchGraphData } from './api/fetchGraphData';
import { DataPoint } from '@/utils/types';
import Header from './Header';
import Footer from './Footer';
import GraphChart from './GraphChart';
import RefreshButton from './RefreshButton';
import { generateRandomDates } from '@/utils/dateUtils';
import { calculatePercentageChange } from '@/utils/calculatePercentageChange';

export default function Graph() {
    const [isRefreshing, setIsRefreshing] = useState(false);
    const [previousData, setPreviousData] = useState<DataPoint[] | null>(null);
    const [randomDates, setRandomDates] = useState('');

    const { data, isLoading, isError, refetch } = useQuery<DataPoint[]>({
        queryKey: ['graphData'],
        queryFn: fetchGraphData,
    });

    useEffect(() => {
        setRandomDates(generateRandomDates());
    }, [data]);

    const handleRefresh = async () => {
        setIsRefreshing(true);
        try {
            await refetch();
            setPreviousData(data ?? null);
        } finally {
            setIsRefreshing(false);
        }
    };

    const percentageChange = calculatePercentageChange(data || null, previousData);

    const chartData = {
        labels: data?.map((point) => new Date(point.timestamp).toLocaleDateString()) || [],
        datasets: [
            {
                label: 'Total Customers',
                data: data?.map((point) => point.value) || [],
                backgroundColor: 'rgba(75,222,87,1)',
                borderColor: '#61c666',
                borderWidth: 1,
                borderRadius: 6,
                borderSkipped: false,
                barPercentage: 1,
                categoryPercentage: 1,
                maxBarThickness: 35,
                minBarLength: 2,
            },
        ],
    };

    return (
        <div className="w-auto p-4 bg-white shadow rounded-xl border border-[#f0f2f3]">
            <div className="flex justify-between items-start">
                <Header totalCustomers={data ? data.slice(-1)[0].value : 'N/A'} />
                <RefreshButton onClick={handleRefresh} isRefreshing={isRefreshing} />
            </div>
            <GraphChart chartData={chartData} isLoading={isLoading} isError={isError} />
            <div className="w-full h-[2px] bg-[#e7ecf2] rounded-lg mt-1"></div>
            <Footer randomDates={randomDates} percentageChange={percentageChange} />
        </div>
    );
}
