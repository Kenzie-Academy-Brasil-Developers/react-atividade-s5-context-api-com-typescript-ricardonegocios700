import { useState, useContext } from "react";
import { useCart } from "../../Providers/Cart/cart";

const List = ({ item }) => {
  const { cart } = useContext(useCart);

  const handleClick = (item) => {
    console.log(item);
  };
  return (
    <div id={item.id}>
      <p>{item.title}</p>
      <p>R$ {item.price.toFixed(2)}</p>
      <img src={item.image} alt={item.title} />
      <button onClick={() => handleClick(item)}>Adicionar</button>
    </div>
  );
};

export default List;
