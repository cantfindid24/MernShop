import HomeScreen from './Screens/HomeScreen.js';
import ProductScreen from './Screens/ProductScreen.js';

import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
      <div>
        <header>
          <Link to={'/'}>MernShop</Link>
          {/* <a href="/">MernShop</a> */}
        </header>
        <main>
          <Routes>
            <Route path="/" element={<HomeScreen />} />
            <Route path="/product/:_id" element={<ProductScreen />}></Route>
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
