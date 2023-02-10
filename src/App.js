import { Route, Routes, useNavigate } from "react-router-dom";
import styled from "styled-components";
import "./App.css";
import Header from "./components/Header";
import Button from "./components/Ui/Button";
import Details from "./page/Details";
import MyCart from "./page/MyCart";
import MyOrder from "./page/MyOrder";
import Products from "./page/Products";

const products = [
  {
    title: "Product Name 1",
    id: "1",
  },
  {
    title: "Product Name 2",
    id: "2",
  },
];
function App() {
  const navigate = useNavigate();
  const GoBackHandler = () => {
    navigate(-1);
  };
  return (
    <Continer>
      <Header />
      <main>
        <Routes>
          <Route path="/products" element={<Products products={products} />} />
          <Route path={`/products/:id/detail`} element={<Details products={products} />} />
          <Route path="/mycart" element={<MyCart />} />
          <Route path="/myorder" element={<MyOrder />} />
        </Routes>
        <CartBtnGoBack>
          <Button onClick={GoBackHandler}>Go Back</Button>
        </CartBtnGoBack>
      </main>
    </Continer>
  );
}

export default App;

const Continer = styled.div`
`;

const CartBtnGoBack = styled.div`
margin-left:32rem;
`