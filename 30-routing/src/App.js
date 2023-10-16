import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './pages/MainPage';
import NotFound from './pages/NotFound';
import ProductPage from './pages/ProductPage';
import Header from './components/Header';
import ProductDetailPage from './pages/ProductDetailPage';
import PhotoPage from './pages/PhotoPage';
import PhotoDetailPage from './pages/PhotoDetailPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header></Header>
        <Routes>
          <Route path="/" element={<MainPage />}></Route>
          <Route path="/products" element={<ProductPage />}></Route>
          <Route
            path="/products/:productId"
            element={<ProductDetailPage />}
          ></Route>

          <Route path="/photos" element={<PhotoPage />}></Route>
          <Route path="/photos/:photoId" element={<PhotoDetailPage />}></Route>

          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
