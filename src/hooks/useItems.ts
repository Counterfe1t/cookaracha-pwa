import { useEffect, useState } from 'react';
import { Item } from '../types/Item';

const dummyItems: Item[] = [
    {
        id: 1,
        name: 'Apple',
        isChecked: false,
    },
    {
        id: 2,
        name: 'Pear',
        isChecked: false,
    },
    {
        id: 3,
        name: 'Orange',
        isChecked: true,
    },
];

export default function useItems() {
    const [items, setItems] = useState(() => {
        const savedItems: Item[] = JSON.parse(
            localStorage.getItem('items') || '[]'
        );
        return savedItems.length > 0 ? savedItems : dummyItems;
    });

    useEffect(() => {
        localStorage.setItem('items', JSON.stringify(items));
    }, [items]);

    function onChangeItem(id: number, isChecked: boolean) {
        setItems((prevTodos) =>
            prevTodos.map((item) =>
                item.id === id ? { ...item, isChecked } : item
            )
        );
    }

    function onAddItem(name: string) {
        setItems((prevItems) => [
            {
                id: Date.now(),
                name,
                isChecked: false,
            },
            ...prevItems,
        ]);
    }

    function onDeleteItem(id: number) {
        setItems((prevItems) => prevItems.filter((item) => item.id !== id));
    }

    function onDeleteAllCheckedItems() {
        setItems((prevItems) => prevItems.filter((item) => !item.isChecked));
    }

    return {
        items,
        onChangeItem,
        onAddItem,
        onDeleteItem,
        onDeleteAllCheckedItems,
    };
}
