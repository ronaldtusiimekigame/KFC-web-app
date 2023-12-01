import { useParams } from "react-router-dom";
import { MenuList } from "../data/data";
import { useState } from "react";
import { Button, Typography } from "@mui/material";

function Cart() {
  const { name } = useParams();
  const data = MenuList.filter((food) => food.name === name)[0];
  const [price, setPrice] = useState(data.price);

  const handleSizeChange = (amount) => {
    setPrice(data.price + amount);
  };

  return (
    <div>
      <Typography variant="h1">{data?.name}</Typography>
      <img width={200} src={data?.image} alt="food" />
      <Typography variant="body1">Price: {price}</Typography>

      <div>
        <Button variant="outlined" onClick={() => handleSizeChange(0)}>
          Small
        </Button>
        <Button variant="outlined" onClick={() => handleSizeChange(5000)}>
          Medium
        </Button>
        <Button variant="outlined" onClick={() => handleSizeChange(10000)}>
          Large
        </Button>
      </div>
    </div>
  );
}

export default Cart;
