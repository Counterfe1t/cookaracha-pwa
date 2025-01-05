import NavMenu from './NavMenu';

export default function Navbar() {
    return (
        <nav className="sticky top-0">
            <div className="flex min-h-12 shadow">
                <h1 className="mx-4 self-center text-2xl">
                    🪳&nbsp;Cookaracha
                </h1>
                <NavMenu />
            </div>
        </nav>
    );
}
