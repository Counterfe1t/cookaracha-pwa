import { Item } from '../types/Item';

interface ItemSummaryProps {
    items: Item[];
    onDeleteAllCheckedItems: () => void;
}

export default function ItemSummary({
    items,
    onDeleteAllCheckedItems,
}: ItemSummaryProps) {
    const checkedItems = items.filter((item) => item.isChecked);

    return (
        <div className="text-center space-y-2">
            <p>
                {checkedItems.length}/{items.length} items checked.
            </p>
            {checkedItems.length > 0 && (
                <button
                    onClick={onDeleteAllCheckedItems}
                    className="text-red-500 hover:underline text-sm font-medium"
                >
                    Delete all checked
                </button>
            )}
        </div>
    );
}
