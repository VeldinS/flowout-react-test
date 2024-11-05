import { FaArrowCircleUp, FaArrowCircleDown } from 'react-icons/fa';

interface FooterProps {
    randomDates: string;
    percentageChange: number;
}

export default function Footer({ randomDates, percentageChange }: FooterProps) {
    return (
        <div className="flex justify-between items-center mt-4">
            <p className="text-[#8b8f98]">{randomDates}</p>
            <div className={`flex items-center px-2 py-[2px] rounded-lg ${percentageChange >= 0 ? 'bg-[#ddf7df]' : 'bg-red-500/30'}`}>
        <span className={`font-semibold ${percentageChange >= 0 ? 'text-[#319e3b]' : 'text-red-500'}`}>
          {percentageChange.toFixed(1)}%
        </span>
                <span className="ml-1">
          {percentageChange >= 0 ? <FaArrowCircleUp className="text-[#319e3b]" /> : <FaArrowCircleDown className="text-red-500" />}
        </span>
            </div>
        </div>
    );
}
