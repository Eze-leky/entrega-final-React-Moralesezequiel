import { useState } from "react";

const Form = () => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // VALIDACIONES
    if (userData.name.length < 5) {
      console.log("nombre no valido");
      return;
    }
    if (userData.email.includes("@")) {
      console.log("email no valido");
      return;
    }
    console.log(userData);
  };

  console.log(userData);
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Ingres nombre"
          onChange={handleChange}
          name="name"
        />
        <input
          type="text"
          placeholder="Ingres su email"
          onChange={handleChange}
          name="email"
        />
        <input
          type="text"
          placeholder="Ingres su contraseña"
          onChange={handleChange}
          name="password"
        />
        <button type="submit"> Enviar </button>
      </form>
    </div>
  );
};

export default Form;
