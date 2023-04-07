import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from "react-router-dom";

const CartWidget = () => {
  return (
    <div>
      <Link to="/cart">
        <AiOutlineShoppingCart color="red" size="40px" />
      </Link>
    </div>
  );
};

export default CartWidget;
