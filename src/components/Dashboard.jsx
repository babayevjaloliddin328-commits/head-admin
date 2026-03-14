import React, { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import Table from "./Table";

const Dashboard = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3005/Products")
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.error('Error fetching products:', error));
  }, []);

  return (
    <div className="dashboard">
      <hr className="dashboard__hr none" />
      <Sidebar />
          <div className="dashboard__right">
        <nav className="dashboard__navbar">
          <h2 className="dashboard__title">Best Admin</h2>
        </nav>
        <main className="main">
          <Table data={products} status={"products"} />
        </main>
      </div>
    </div>
  );
};

export default Dashboard;