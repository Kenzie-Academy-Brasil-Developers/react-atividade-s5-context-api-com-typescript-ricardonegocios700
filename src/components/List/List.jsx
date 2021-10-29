import { useCart } from "../../Providers/Cart/cart";

const List = ({ item, isCart }) => {
  const { addProduct, deleteProduct } = useCart();

  const handleClickAdd = (item) => {
    addProduct(item);
  };
  const handleClickRemove = (item) => {
    deleteProduct(item);
  };
  return (
    <div key={item.id} className="item">
      <p>{item.title}</p>
      <p>R$ {item.price.toFixed(2)}</p>
      <img src={item.image} alt={item.title} />
      {!isCart && (
        <button onClick={() => handleClickAdd(item)}>Adicionar</button>
      )}
      {isCart && (
        <button onClick={() => handleClickRemove(item)}>Remover</button>
      )}
    </div>
  );
};

export default List;
