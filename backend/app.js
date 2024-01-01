import fs from "node:fs/promises";
import bodyParser from "body-parser";
import express from "express";
import cors from "cors";

// import Checkout from "../src/pages/Checkout";

const app = express();
app.use(cors());
app.use(bodyParser.json());

//After deployment 
app.use(express.static('backend/public'));
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  next();
});

app.use("/images", express.static("images"));
app.get("/meals", async (req, res) => {
  const meals = await fs.readFile("./data/available-meals.json", "utf8");
  res.json(JSON.parse(meals));
});

app.post("/orders", async (req, res) => {
  const orderData = req.body.order;
  if (orderData === null || orderData.items === null || orderData.items == []) {
    return res.status(400).json({ message: "Missing data." });
  }
  if (
    orderData.customer.email === null ||
    !orderData.customer.email.includes("@") ||
    orderData.customer.fullName === null ||
    orderData.customer.fullName.trim() === "" ||
    orderData.customer.number === null ||
    orderData.customer.number < 11 ||
    orderData.customer.address === null ||
    orderData.customer.address.trim() === ""
  ) {
    return res.status(400).json({
      message:
        "Missing data: Email, name, address, payMethod or city is missing.",
    });
  }

  const newOrder = {
    id: (Math.random() * 1000).toString(),
    ...orderData,
  };
  const orders = await fs.readFile("./data/orders.json", "utf8");
  const allOrders = JSON.parse(orders);
  allOrders.push(newOrder);
  await fs.writeFile("./data/orders.json", JSON.stringify(allOrders));
  res.status(201).json({ message: "Order Successfully Created!" });
});

app.use((req, res) => {
  if (req.method === "OPTIONS") {
    return res.sendStatus(200);
  }

  res.status(404).json({ message: "Not found" });
});

// app.listen(5000, () => {
//   console.log("serve at https://localhost:5000");
// });

// After deployment
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log("Server is running at http://localhost:${PORT}");
});

