import { useState } from 'react';
import { FaInfo } from 'react-icons/fa';

export default function InfoTooltip() {
    const [showTooltip, setShowTooltip] = useState(false);

    return (
        <div
            className="relative px-[8px] py-[6px] rounded-md bg-[#f3f5f8]"
            onMouseEnter={() => setShowTooltip(true)}
            onMouseLeave={() => setShowTooltip(false)}
        >
            <FaInfo className="text-[#8b8f98] text-[10px]" />
            {showTooltip && (
                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-1 w-48 p-2 bg-gray-700 text-white text-sm rounded shadow-lg">
                    Here you can find the total number of customers over the selected period.
                </div>
            )}
        </div>
    );
}
