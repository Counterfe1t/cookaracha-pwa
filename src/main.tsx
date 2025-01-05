import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router';
import App from './App.tsx';
import './index.css';
import Home from './pages/Home.tsx';
import NotFound from './pages/NotFound.tsx';
import Products from './pages/Products.tsx';
import ShoppingLists from './pages/ShoppingLists.tsx';

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />}>
                    <Route index element={<Home />} />
                    <Route path="/shopping-lists" element={<ShoppingLists />} />
                    <Route path="/products" element={<Products />} />
                    <Route path="*" element={<NotFound />} />
                </Route>
            </Routes>
        </BrowserRouter>
    </StrictMode>
);

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./src/service-worker.ts');
}
