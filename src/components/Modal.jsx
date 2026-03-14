import React, { useEffect, useState } from "react";

const Modal = ({ status, opened }) => {
  const [modalData, setModalData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (status.select === "view" && status.status === "products") {
      setLoading(true);
      fetch(`http://localhost:3005/Products/${status.id}`)
        .then((response) => {
          if (!response.ok) {
            throw new Error("Failed to fetch product");
          }
          return response.json();
        })
        .then((data) => {
          setModalData(data);
          setLoading(false);
        })
        .catch((err) => {
          setError(err.message);
          setLoading(false);
        });
    }
  }, [status.id, status.status, status.select]);

  if (status.select !== "view" || status.status !== "products") {
    return null;
  }

  if (loading) {
    return (
      <div className="modal">
        <p>Loading...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="modal">
        <p>Error: {error}</p>
      </div>
    );
  }

  return (
    <div className="modal">
      <svg
        onClick={() => opened(false)}
        className="modal__exit"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M11.9997 10.5865L16.9495 5.63672L18.3637 7.05093L13.4139 12.0007L18.3637 16.9504L16.9495 18.3646L11.9997 13.4149L7.04996 18.3646L5.63574 16.9504L10.5855 12.0007L5.63574 7.05093L7.04996 5.63672L11.9997 10.5865Z"></path>
      </svg>
      <div className="modal__boxes">
        <h2 className="modal__title">ID:</h2>
        <p className="modal__texts">{modalData?.id}</p>
      </div>
      <div className="modal__boxes">
        <img className="modal__img" src={modalData?.image} alt="" />
      </div>
      <div className="modal__boxes">
        <p className="modal__texts">{modalData?.name}</p>
      </div>
      <div className="modal__boxes">
        <p
          style={{ color: "gray", fontWeight: 400, fontSize: 16 }}
          className="modal__texts"
        >
          {modalData?.description}
        </p>
      </div>
      <div className="modal__boxes">
        <h2 className="modal__title">Price:</h2>
        <p
          style={{
            color: "green",
            backgroundColor: "lightgreen",
            padding: 4,
            borderRadius: 8,
          }}
          className="modal__texts"
        >
          ${modalData?.price}
        </p>
      </div>
      <div className="modal__boxes">
        <h2 className="modal__title">Category:</h2>
        <p
          style={{
            backgroundColor: "black",
            color: "white",
            padding: 8,
            borderRadius: 8,
          }}
          className="modal__texts"
        >
          {modalData?.category}
        </p>
      </div>
    </div>
  );
};

export default Modal;