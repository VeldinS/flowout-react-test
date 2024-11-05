import InfoTooltip from './InfoTooltip';

interface HeaderProps {
    totalCustomers: number | 'N/A';
}

export default function Header({ totalCustomers }: HeaderProps) {
    return (
        <div className="flex justify-between items-start">
            <div className="flex flex-col items-start justify-start gap-1">
                <div className="flex flex-row items-center justify-center gap-2">
                    <h2 className="text-black text-base font-semibold">Total customers</h2>
                    <InfoTooltip />
                </div>
                <p className="text-5xl text-black font-semibold">{totalCustomers}</p>
            </div>
        </div>
    );
}
