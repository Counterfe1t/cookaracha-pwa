import NavMenuItem from './NavMenuItem';

function NavMenu() {
    return (
        <div className="flex gap-8">
            <NavMenuItem path="/" title="Home" />
            <NavMenuItem path="/shopping-lists" title="Shopping&nbsp;lists" />
            <NavMenuItem path="/recipes" title="Recipes" />
            <NavMenuItem path="/products" title="Products" />
        </div>
    );
}

export default NavMenu;
