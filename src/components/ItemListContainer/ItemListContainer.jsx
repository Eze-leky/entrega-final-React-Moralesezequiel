import "./list.css";
import { useState, useEffect } from "react";
import { products } from "../../productsMock";
import ItemList from "../itemList/ItemList";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
  const { categoryName } = useParams();

  const [items, setItems] = useState([]);

  const productosFiltrados = products.filter(
    (elemento) => elemento.category === categoryName
  );

  useEffect(() => {
    const productList = new Promise((resolve, reject) => {
      resolve(categoryName ? productosFiltrados : products);
    });

    productList
      .then((res) => {
        setItems(res);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [categoryName]);
  // console.log(items);

  return (
    <div className>
      <ItemList items={items} />
    </div>
  );
};

export default ItemListContainer;
