import AddItemForm from '../components/AddItemForm';
import ItemList from '../components/ItemList';
import ItemSummary from '../components/ItemSummary';
import useItems from '../hooks/useItems';

export default function ShoppingLists() {
    const {
        items,
        onChangeItem,
        onAddItem,
        onDeleteItem,
        onDeleteAllCheckedItems,
    } = useItems();

    return (
        <main className="h-screen space-y-5 p-10">
            <h1 className="text-center text-3xl font-bold">
                Try out the new shopping list!
            </h1>
            <div className="mx-auto max-w-lg space-y-5 rounded-md bg-slate-100 p-5">
                <AddItemForm onSubmit={onAddItem} />
                <ItemList
                    items={items}
                    onChangeItem={onChangeItem}
                    onDeleteItem={onDeleteItem}
                />
                <ItemSummary
                    items={items}
                    onDeleteAllCheckedItems={onDeleteAllCheckedItems}
                />
            </div>
        </main>
    );
}
