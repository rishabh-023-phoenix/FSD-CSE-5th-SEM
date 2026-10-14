import { useEffect, useState } from "react";

const tableHeader = {
  border: "1px solid black",
  padding: "10px",
  backgroundColor: "white",
  color: "black",
  textAlign: "center",
};

const tableCell = {
  border: "1px solid black",
  padding: "10px",
  backgroundColor: "white",
  color: "black",
  textAlign: "center",
};

const buttonStyle = {
  backgroundColor: "white",
  color: "black",
  border: "1px solid black",
  padding: "8px 12px",
  borderRadius: "5px",
  cursor: "pointer",
};

function FetchProducts() {
  const [data, setData] = useState([]);

  // Fetch products
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          "https://dummyjson.com/products"
        );

        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }

        const result = await response.json();

        console.log(result);

        setData(result.products);
      } catch (e) {
        console.log("Error is: " + e);
      } finally {
        console.log("API request completed");
      }
    }

    fetchData();
  }, []);

  // Add to cart function
  function addToCart(product) {
    console.log("Added to cart:", product);

    alert(`${product.title} added to cart!`);
  }

  return (
    <div
      style={{
        backgroundColor: "white",
        color: "black",
        padding: "20px",
        width: "90%",
        margin: "20px auto",
      }}
    >
      <h2
        style={{
          color: "black",
          textAlign: "center",
        }}
      >
        Product List
      </h2>

      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          backgroundColor: "white",
          color: "black",
        }}
      >
        <thead>
          <tr>
            <th style={tableHeader}>ID</th>
            <th style={tableHeader}>Title</th>
            <th style={tableHeader}>Category</th>
            <th style={tableHeader}>Price</th>
            <th style={tableHeader}>Rating</th>
            <th style={tableHeader}>Stock</th>
            <th style={tableHeader}>Action</th>
          </tr>
        </thead>

        <tbody>
          {data.map((product) => (
            <tr key={product.id}>
              <td style={tableCell}>{product.id}</td>

              <td style={tableCell}>
                {product.title}
              </td>

              <td style={tableCell}>
                {product.category}
              </td>

              <td style={tableCell}>
                ${product.price}
              </td>

              <td style={tableCell}>
                {product.rating}
              </td>

              <td style={tableCell}>
                {product.stock}
              </td>

              <td style={tableCell}>
                <button
                  style={buttonStyle}
                  onClick={() => addToCart(product)}
                >
                  Add to Cart
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default FetchProducts;