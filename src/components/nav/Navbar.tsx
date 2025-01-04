import { Link } from 'react-router';

export default function Navbar() {
    return (
        <nav className="box-border p-2 border-b border-slate-100">
            <div className="flex">
                <h1 className="text-3xl text-center mr-5">🪳 Cookaracha</h1>
                <div className="flex space-x-4 items-center">
                    <Link to="/">Home</Link>
                    <Link to="/shopping-lists">Shopping lists</Link>
                    <Link to="/products">Products</Link>
                </div>
            </div>
        </nav>
    );
}
