'use client';

import React from 'react';

interface Todo {
    id: number;
    text: string;
    completed: boolean;
}

interface TodoItemProps {
    todo: Todo;
    onToggle: () => void;
}

export default function TodoItem({ todo, onToggle }: TodoItemProps) {
    return (
        <div className="group flex items-center px-6 py-4 border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200">
            <button
                onClick={onToggle}
                className={`flex items-center justify-center w-6 h-6 rounded-full border-2 mr-4 transition-all duration-200 ${todo.completed
                        ? 'bg-gradient-to-r from-blue-500 to-purple-500 border-transparent'
                        : 'border-gray-300 dark:border-gray-600 hover:border-purple-500'
                    }`}
            >
                {todo.completed && (
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                )}
            </button>

            <span
                className={`flex-1 text-gray-800 dark:text-gray-200 transition-all duration-200 ${todo.completed ? 'line-through text-gray-500 dark:text-gray-400' : ''
                    }`}
            >
                {todo.text}
            </span>
        </div>
    );
}
