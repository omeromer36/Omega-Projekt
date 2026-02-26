import "./index.css";
import Navbar from "./navbar.jsx";
import ProductCard from "./ProductCard.jsx";
import Footer from "./Footer.jsx";

import glove from "./Products/glove.jpg";
import glove1 from "./Products/glove1.jpg";
import glove2 from "./Products/glove2.webp";
import glove3 from "./Products/glove3.jpg";
import glove4 from "./Products/glove4.webp";
import glove5 from "./Products/glove5.jpg";
import axios from "axios";
import { useEffect,useState } from "react";
import ShoppingCard from "./shopping-card.jsx";



function App() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((err) => {
        setError("Failed to fetch products");
      });
  }, []);
  return (
    <>
      <Navbar />
      <div className="products-container">
        {products.map((product) => (
          <ProductCard
            image={product.image}
            title= {product.title}
            price= {product.price}
          />
        ))}
      </div>

     
        

      <Footer />
    </>
  );
}

export default App;
