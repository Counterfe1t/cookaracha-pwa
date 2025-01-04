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
        <main className="p-10 h-screen space-y-5">
            <h1 className="text-center font-bold text-3xl">
                Try out the new shopping list!
            </h1>
            <div className="max-w-lg mx-auto bg-slate-100 rounded-md p-5 space-y-5">
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
