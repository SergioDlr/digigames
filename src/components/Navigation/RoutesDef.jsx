import React from "react";
import { Routes, Route } from "react-router-dom";
import ItemListContainer from "../Item/ItemListContainer";
import NotFound from "../Screen/NotFound";
import ItemDetailContainer from "../ItemDetail/ItemDetailContainer";
import Cart from "../Screen/Cart";

const RoutesDef = () => {
  return (
    <Routes>
      <Route path="*" element={<NotFound />} />
      <Route path="/" element={<ItemListContainer />} />
      <Route path="/Cart" element={<Cart />} />
      <Route path="/item/:itemId" element={<ItemDetailContainer />} />
      <Route path="/category/:catId" element={<ItemListContainer />} />
      <Route path="/discount" element={<ItemListContainer discount={true} />} />
    </Routes>
  );
};

export default RoutesDef;
