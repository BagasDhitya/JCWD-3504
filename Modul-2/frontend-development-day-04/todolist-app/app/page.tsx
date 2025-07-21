'use client';

import { useState } from 'react';
import { Moon, Sun } from 'lucide-react';
import TodoItem from '@/components/TodoItem';
import FilterButton from '@/components/FilterButton';

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

type Filter = 'all' | 'active' | 'completed';

export default function Home() {
  const [todos, setTodos] = useState<Todo[]>([
    { id: 1, text: 'Complete online JavaScript course', completed: true },
    { id: 2, text: 'Jog around the park 3x', completed: false },
    { id: 3, text: '10 minutes meditation', completed: false },
    { id: 4, text: 'Read for 1 hour', completed: false },
    { id: 5, text: 'Pick up groceries', completed: false },
    { id: 6, text: 'Complete Todo App on Frontend Mentor', completed: false },
  ]);

  const [filter, setFilter] = useState<Filter>('all');
  const [inputValue, setInputValue] = useState('');
  const [isDarkMode, setIsDarkMode] = useState(false);

  function addTodo() {
    if (inputValue.trim()) {
      const newTodo: Todo = {
        id: Date.now(),
        text: inputValue.trim(),
        completed: false,
      };
      setTodos([...todos, newTodo]);
      setInputValue('');
    }
  }

  function toggleTodo(id: number) {
    setTodos(todos.map(function (todo) {
      return todo.id === id ? { ...todo, completed: !todo.completed } : todo;
    }));
  }

  function clearCompleted() {
    setTodos(todos.filter(function (todo) {
      return !todo.completed;
    }));
  }

  const filteredTodos = todos.filter(function (todo) {
    if (filter === 'active') return !todo.completed;
    if (filter === 'completed') return todo.completed;
    return true;
  });

  const activeTodosCount = todos.filter(function (todo) {
    return !todo.completed;
  }).length;

  return (
    <div className={isDarkMode ? 'dark' : ''}>
      <div className="min-h-screen transition-all duration-300 bg-gradient-to-br from-purple-400 via-purple-500 to-blue-500 dark:from-gray-900 dark:via-purple-900 dark:to-blue-900">
        {/* Background SVG */}
        <div className="absolute inset-0 opacity-20">
          <svg viewBox="0 0 1200 600" className="w-full h-full">
            <path d="M0,600 L0,350 L200,250 L400,300 L600,200 L800,280 L1000,150 L1200,200 L1200,600 Z"
              fill="currentColor" className="text-white dark:text-gray-800" />
            <path d="M0,600 L0,400 L150,320 L350,380 L550,280 L750,350 L950,220 L1200,280 L1200,600 Z"
              fill="currentColor" className="text-white dark:text-gray-700" fillOpacity="0.7" />
          </svg>
        </div>

        <div className="relative z-10 flex flex-col items-center justify-center min-h-screen p-4">
          <div className="flex items-center justify-between w-full max-w-2xl mb-8">
            <h1 className="text-4xl md:text-6xl font-bold text-white tracking-[0.3em]">
              TODO
            </h1>
            <button
              onClick={function () { setIsDarkMode(!isDarkMode); }}
              className="p-2 text-white hover:text-yellow-300 transition-colors duration-200"
            >
              {isDarkMode ? <Sun size={24} /> : <Moon size={24} />}
            </button>
          </div>

          <div className="w-full max-w-2xl mb-6">
            <div className="relative">
              <input
                type="text"
                value={inputValue}
                onChange={function (e) { setInputValue(e.target.value); }}
                onKeyPress={function (e) { if (e.key === 'Enter') addTodo(); }}
                placeholder="Currently typing..."
                className="w-full px-6 py-4 text-gray-800 dark:text-gray-200 bg-white dark:bg-gray-800 rounded-lg shadow-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-200"
              />
              <div className="absolute left-4 top-1/2 transform -translate-y-1/2 w-6 h-6 rounded-full border-2 border-gray-300 dark:border-gray-600"></div>
            </div>
          </div>

          <div className="w-full max-w-2xl bg-white dark:bg-gray-800 rounded-lg shadow-xl overflow-hidden">
            {filteredTodos.map(function (todo) {
              return (
                <TodoItem key={todo.id} todo={todo} onToggle={function () { toggleTodo(todo.id); }} />
              );
            })}

            <div className="px-6 py-4 bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
              <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
                <span>{activeTodosCount} items left</span>
                <div className="flex space-x-4">
                  <FilterButton active={filter === 'all'} onClick={function () { setFilter('all'); }}>All</FilterButton>
                  <FilterButton active={filter === 'active'} onClick={function () { setFilter('active'); }}>Active</FilterButton>
                  <FilterButton active={filter === 'completed'} onClick={function () { setFilter('completed'); }}>Completed</FilterButton>
                </div>
                <button
                  onClick={clearCompleted}
                  className="hover:text-gray-700 dark:hover:text-gray-200 transition-colors duration-200"
                >
                  Clear Completed
                </button>
              </div>
            </div>
          </div>

          <p className="mt-6 text-gray-300 dark:text-gray-500 text-sm">
            Drag and drop to reorder list
          </p>
        </div>
      </div>
    </div>
  );
}
