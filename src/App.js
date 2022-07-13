import { ProductList, Cart } from "./pages";
import { Header } from "./components/Header/Header";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="">
      <Header />
      <Routes>
        <Route path="/" element={<ProductList />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
      </Routes>
    </div>
  );
}

export default App;
