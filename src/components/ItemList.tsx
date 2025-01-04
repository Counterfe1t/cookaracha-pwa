import { Item } from '../types/Item';
import ItemRow from './ItemRow';

interface ItemListProps {
    items: Item[];
    onChangeItem: (id: number, isChecked: boolean) => void;
    onDeleteItem: (id: number) => void;
}

export default function ItemList({
    items,
    onChangeItem,
    onDeleteItem,
}: ItemListProps) {
    const itemsSorted = items.sort((a, b) => {
        if (a.isChecked === b.isChecked) return b.id - a.id;
        return a.isChecked ? 1 : -1;
    });

    return (
        <>
            <div className="space-y-2">
                {itemsSorted.map((item) => (
                    <ItemRow
                        key={item.id}
                        item={item}
                        onChange={onChangeItem}
                        onDelete={onDeleteItem}
                    />
                ))}
            </div>
            {items.length === 0 && (
                <p className="text-center text-sm text-gray-500">
                    No items yet. Add a new one above.
                </p>
            )}
        </>
    );
}
