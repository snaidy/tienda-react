import React from "react";
import Counter from "../counter/counter.jsx";
import List from "../list/list.jsx";
import Logo from "../Logo/logo.jsx";
//Crear un componente
const Home = () => {
  const products = ["Arroz", "Panela", "Papa", "Lentejas", "Sal"];
  return (
    <>
      <h1> Home Tienda </h1>
      <Logo />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus,
        molestias? Accusamus magnam maiores doloribus eum. Beatae impedit quia
        culpa inventore libero officia doloribus autem hic, ab, nostrum quidem
        reprehenderit vel.
      </p>
      <Counter />
      <List title="Lista de Productos" list={products} />
    </> //fragment etiquetas vacias
  );
};

export default Home;
