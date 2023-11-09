import React, { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { addtoCart } from "./CartSlice";
import { useDispatch } from "react-redux";
import Navbar from "./Navbar";

const ProductsDetails = () => {
  const dispatch = useDispatch();

  const addto = (product) => {
    dispatch(addtoCart(product));
  };

  const [product, setProduct] = useState("");
  const productId = useParams().id;

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${productId}`)
      .then((response) => response.json())
      .then((data) => setProduct(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, [productId]);

  const cards = (
    <Card
      key={product.id}
      style={{
        height: "450px",
        margin: "10px",
        width: "420px",
        textAlign: "center",
      }}
    >
      <div
        className="text center"
        style={{ display: "flex", justifyContent: "center" }}
      >
        <Card.Img
          src={product.image}
          style={{ width: "200px", height: "150px" }}
        ></Card.Img>
      </div>
      <Card.Title>{product.title}</Card.Title>
      <Card.Title>{product.description}</Card.Title>
      <Card.Title>Price: ${product.price}</Card.Title>
      <Button onClick={() => addto(product)} style={{ margin: "5px" }}>
        Add To Cart
      </Button>
      <Button variant="success" style={{ margin: "5px" }}>
        Buy Now
      </Button>
    </Card>
  );

  return (
    <div>
      <Navbar />
      <h1>detail page</h1>
      <div>{cards}</div>
    </div>
  );
};

export default ProductsDetails;
