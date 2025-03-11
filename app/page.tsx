
'use client';

import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

export default function Home() {
  const [todos, setTodos] = useState<string[]>([]);
  const [newTodo, setNewTodo] = useState('');

  const handleAddTodo = () => {
    if (newTodo.trim() !== '') {
      setTodos([...todos, newTodo]);
      setNewTodo('');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-2xl font-bold mb-4">Todo App</h1>
      <div className="flex w-full max-w-md space-x-2">
        <Input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Add a todo..."
        />
        <Button onClick={handleAddTodo}>Add Todo</Button>
      </div>
      <ul className="mt-4 w-full max-w-md">
        {todos.map((todo, index) => (
          <li key={index} className="py-2 border-b border-gray-200">
            {todo}
          </li>
        ))}
      </ul>
    </div>
  );
}
