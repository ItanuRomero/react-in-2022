import {
    BrowserRouter as Router,
    Routes,
    Route
} from 'react-router-dom';
import { Cart } from './pages/Cart';
import { Catalog } from './pages/Catalog';
import { Home } from './pages/Home';

export function AppRoutes() {
    return (
        <Router>
            <Routes>
                <Route path='/cart' element={<Cart />} />
                <Route path='/catalog' element={<Catalog />} />
                <Route path='/' element={<Home />} />
            </Routes>
        </Router>
    )
}