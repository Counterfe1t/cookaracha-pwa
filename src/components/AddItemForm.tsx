import { useState } from 'react';

interface AddItemFormProps {
    onSubmit: (name: string) => void;
}

export default function AddItemForm({ onSubmit }: AddItemFormProps) {
    const [input, setInput] = useState('');

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        if (!input.trim()) return;

        onSubmit(input);
        setInput('');
    }

    return (
        <form className="flex" onSubmit={handleSubmit}>
            <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Add a new item..."
                className="grow rounded-s-md border border-gray-400 p-2"
            />
            <button
                type="submit"
                className="w-16 rounded-e-md bg-slate-900 text-white hover:bg-slate-800"
            >
                Add
            </button>
        </form>
    );
}
