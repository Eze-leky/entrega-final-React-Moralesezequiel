import styles from "./Navbar.module.css";

import CartWidget from "../CartWidget/CartWidget";

import { Link } from "react-router-dom";

const Navbar = ({ children }) => {
  const cate = [
    {
      title: "Todas",
      path: "/",
      id: 1,
    },
    {
      title: "Clasicos",
      path: "/category/Clasico",
      id: 2,
    },
    {
      title: "Tiki",
      path: "/category/Tiki",
      id: 3,
    },
  ];

  return (
    <div>
      <div className={styles.containerNavbar}>
        <Link to="/" style={{ color: "#e1d4c7", textDecoration: "none" }}>
          Tienda de Bebidas
        </Link>

        <ul className={styles.containerList}>
          {cate?.map((category) => {
            return (
              <Link
                key={category.id}
                to={category.path}
                className={styles.navbarItem}
              >
                {category.title}
              </Link>
            );
          })}
        </ul>
        <CartWidget />
      </div>
      {children}
    </div>
  );
};

export default Navbar;
