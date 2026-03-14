import React, {useEffect, useState} from "react";
import Table from "./Table";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3005/Products")
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.error('Error fetching products:', error));
  }, []);

  console.log(products);
  
  return <div>
    <Table data={products} status={"products"}/>
  </div>;
};

export default Products;