import { Link } from 'react-router';

export default function Navbar() {
    return (
        <nav className="sticky top-0 box-border border-b border-slate-100 bg-white p-2">
            <div className="flex">
                <h1 className="mr-5 text-center text-3xl">🪳 Cookaracha</h1>
                <div className="flex items-center space-x-4">
                    <Link to="/">Home</Link>
                    <Link to="/shopping-lists">Shopping lists</Link>
                    <Link to="/recipes">Recipes</Link>
                    <Link to="/products">Products</Link>
                </div>
            </div>
        </nav>
    );
}
