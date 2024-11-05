import { Bar } from 'react-chartjs-2';
import { ChartData, ScriptableContext } from 'chart.js';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Tooltip,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip);

interface GraphChartProps {
    chartData: ChartData<'bar', number[], string>;
    isLoading: boolean;
    isError: boolean;
}

export default function GraphChart({ chartData, isLoading, isError }: GraphChartProps) {
    const options = {
        responsive: true,
        scales: {
            x: { grid: { display: false }, ticks: { display: false }, border: { display: false } },
            y: { grid: { display: false }, ticks: { display: false }, border: { display: false }, beginAtZero: true },
        },
        plugins: { legend: { display: false } },
    };

    const createGradient = (ctx: CanvasRenderingContext2D, area: { top: number; bottom: number }) => {
        const gradient = ctx.createLinearGradient(0, area.bottom, 0, area.top);
        gradient.addColorStop(0, 'rgba(190,245,194,1)');
        gradient.addColorStop(1, 'rgba(75,222,87,1)');
        return gradient;
    };

    return (
        <div className="h-40 w-80 flex justify-center items-center rounded-lg">
            {isLoading && <p className="font-semibold text-black">Loading...</p>}
            {isError && <p>Error loading data</p>}
            {!isLoading && !isError && (
                <Bar
                    data={{
                        ...chartData,
                        datasets: chartData.datasets.map((dataset) => ({
                            ...dataset,
                            backgroundColor: (context: ScriptableContext<'bar'>) => {
                                const { ctx, chartArea } = context.chart;
                                if (!chartArea) return 'rgba(75,222,87,1)';
                                return createGradient(ctx, chartArea);
                            },
                        })),
                    }}
                    options={options}
                />
            )}
        </div>
    );
}
