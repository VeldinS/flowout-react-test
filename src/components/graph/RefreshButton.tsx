import { FaSyncAlt } from 'react-icons/fa';

interface RefreshButtonProps {
    onClick: () => void;
    isRefreshing: boolean;
}

export default function RefreshButton({ onClick, isRefreshing }: RefreshButtonProps) {
    return (
        <button
            onClick={onClick}
            className={`bg-white border border-[#eef2f3] px-[8px] py-[6px] rounded-lg ${isRefreshing ? 'animate-spin' : ''}`}
        >
            <FaSyncAlt className="text-[#b7b9bf] text-sm" />
        </button>
    );
}
