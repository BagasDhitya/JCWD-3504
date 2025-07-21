'use client';

import React from 'react';

interface FilterButtonProps {
    active: boolean;
    onClick: () => void;
    children: React.ReactNode;
}

export default function FilterButton({ active, onClick, children }: FilterButtonProps) {
    return (
        <button
            onClick={onClick}
            className={`px-3 py-1 rounded transition-colors duration-200 ${active
                    ? 'text-blue-500 dark:text-blue-400'
                    : 'hover:text-gray-700 dark:hover:text-gray-200'
                }`}
        >
            {children}
        </button>
    );
}
