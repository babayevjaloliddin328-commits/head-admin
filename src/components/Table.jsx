import React, {useState} from "react";
import Modal from "./Modal";
const Table = ({data, status}) => {
  console.log(status);
  const [productId, setProductsId] = useState({
    id: null,
    status: "",
    select: ""
  });

  const handleProductId = (id, status, select) => {
    setProductsId({...productId, id, status, select});
    setOpened(true);
  };
  const [opened, setOpened] = useState(false);
  if (status === "products") {
    return (
      <table className="main__table">
        <thead className="main__table-head">
          <th className="main__table-hd">Id</th>
          <th className="main__table-hd">Image</th>
          <th className="main__table-hd">Name</th>
          <th className="main__table-hd">Price</th>
          <th className="main__table-hd">Category</th>
          <th className="main__table-hd">Action</th>
        </thead>
        <tbody className="main__table-body">
          {data?.map(({id, image, name, price, category}, index) => (
            <tr className="main__table-r main__table-animate">
              <td className="main__table-d">{id}</td>
              <td className="main__table-d">
                <img
                  style={{borderRadius: 10}}
                  width={"150"}
                  height={100}
                  src={image}
                  alt=""
                />
              </td>
              <td className="main__table-d">{name}</td>
              <td className="main__table-d">{price}$</td>
              <td className="main__table-d">{category}</td>
              <td className="main__table-d">
                <button onClick={() => handleProductId(id, "products", "view")} style={{marginRight: '5px'}}>View</button>
                <button onClick={() => handleProductId(id, "products", "edit")} style={{marginRight: '5px'}}>Edit</button>
                <button onClick={() => handleProductId(id, "products", "delete")}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
        {opened ? <Modal status={productId} opened={setOpened} /> : null}
      </table>
    );
  } else if (status === "users") {
    return (
      <table className="main__table">
        <thead className="main__table-head">
          <th className="main__table-hd">Id</th>
          <th className="main__table-hd">Avatar</th>
          <th className="main__table-hd">Name</th>
          <th className="main__table-hd">Email</th>
          <th className="main__table-hd">Role</th>
          <th className="main__table-hd">Joined</th>
          <th className="main__table-hd">Country</th>
          <th className="main__table-hd">Action</th>
        </thead>
        <tbody className="main__table-body">
          {data?.map(
            ({id, avatar, name, role, email, joined, country}, index) => (
              <tr className="main__table-r main__table-animate">
                <td className="main__table-d">{id}</td>
                <td className="main__table-d">
                  <img
                    style={{borderRadius: 50}}
                    width={"50"}
                    src={avatar}
                    alt=""
                  />
                </td>
                <td className="main__table-d">{name}</td>
                <td className="main__table-d">{email}</td>
                <td className="main__table-d">{role}</td>
                <td className="main__table-d">{joined}</td>
                <td className="main__table-d">{country}</td>
                <td className="main__table-d">
                  <button onClick={() => handleProductId(id, "users", "view")} style={{marginRight: '5px'}}>View</button>
                  <button onClick={() => handleProductId(id, "users", "edit")} style={{marginRight: '5px'}}>Edit</button>
                  <button onClick={() => handleProductId(id, "users", "delete")}>Delete</button>
                </td>
              </tr>
            ),
          )}
        </tbody>
        {opened ? <Modal status={productId} opened={setOpened} /> : null}
      </table>
    );
  } else if (status === "cars") {
    return (
      <table className="main__table">
        <thead className="main__table-head">
          <th className="main__table-hd">Id</th>
          <th className="main__table-hd">Image</th>
          <th className="main__table-hd">Make</th>
          <th className="main__table-hd">Model</th>
          <th className="main__table-hd">Price</th>
          <th className="main__table-hd">Color</th>
          <th className="main__table-hd">Year</th>
          <th className="main__table-hd">Action</th>
        </thead>
        <tbody className="main__table-body">
          {data?.map(({id, image, make, model, price, color, year}, index) => (
            <tr className="main__table-r main__table-animate">
              <td className="main__table-d">{id}</td>
              <td className="main__table-d">
                <img
                  style={{borderRadius: 10}}
                  width={"150"}
                  height={100}
                  src={image}
                  alt=""
                />
              </td>
              <td className="main__table-d">{make}</td>
              <td className="main__table-d">{model}</td>
              <td className="main__table-d">{price}$</td>
              <td className="main__table-d">{color}</td>
              <td className="main__table-d">{year}</td>
              <td className="main__table-d">
                <button onClick={() => handleProductId(id, "cars", "view")} style={{marginRight: '5px'}}>View</button>
                <button onClick={() => handleProductId(id, "cars", "edit")} style={{marginRight: '5px'}}>Edit</button>
                <button onClick={() => handleProductId(id, "cars", "delete")}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
        {opened ? <Modal status={productId} opened={setOpened} /> : null}
      </table>
    );
  }
};

export default Table;