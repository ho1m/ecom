import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Header from './components/Header';
import Home from './pages/Home';
import Admin from './pages/Admin';
import ProductPage from './pages/ProductPage';
import NotFound from './pages/NotFound';
import Products from "./pages/Products";

function App() {
  return (
    <Router>
      <div className="d-flex flex-column min-vh-100">
        <Header />

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Routes>

          <Route exact path="/product/:productId" element={<ProductPage />} />
          <Route exact path="/products" element={<Products />} />
          <Route exact path="/admin" element={<Admin />} />
          <Route exact path="/" element={<Home />} />
          <Route exact path="/*" element={<NotFound />} />
          
        </Routes>
      </div>
    </Router>
  );
}

export default App;
