import { Outlet } from 'react-router';
import Navbar from './components/nav/Navbar';

export default function App() {
    return (
        <>
            <Navbar />
            <Outlet />
        </>
    );
}
