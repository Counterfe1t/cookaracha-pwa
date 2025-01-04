import { Item } from '../types/Item';

interface ItemRowProps {
    item: Item;
    onChange: (id: number, isChecked: boolean) => void;
    onDelete: (id: number) => void;
}

export default function ItemRow({ item, onChange, onDelete }: ItemRowProps) {
    return (
        <div className="flex items-center gap-1">
            <label className="flex items-center grow gap-2 border rounded-md p-2 border-gray-400 bg-white hover:bg-slate-50">
                <input
                    type="checkbox"
                    className="scale-125"
                    checked={item.isChecked}
                    onChange={(e) => onChange(item.id, e.target.checked)}
                />
                <span
                    className={
                        item.isChecked ? 'line-through text-gray-400' : ''
                    }
                >
                    {item.name}
                </span>
            </label>
            <button onClick={() => onDelete(item.id)} className="p-2">
                ❌
            </button>
        </div>
    );
}
