


// Load products from backend to frontend

import express from "express";
import cors from "cors";
import bodyParser from 'body-parser'
import data from "./data.js";


const app = express(); 
app.use(cors());
app.use(bodyParser.json()); 

app.use('/images', express.static('images'));

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

app.get("/api/meals", (req , res) =>{
    // console.log("ServerResponse:", Meals)
    res.send(data.meals) //sending data to client or frontend side
})
app.post('/orders', async (req, res) => {
    const orderData = req.body.order;
  
    if (orderData === null || orderData.items === null || orderData.items == []) {
      return res
        .status(400)
        .json({ message: 'Missing data.' });
    }
  
    if (
      orderData.customer.email === null ||
      !orderData.customer.email.includes('@') ||
      orderData.customer.name === null ||
      orderData.customer.name.trim() === '' ||
      orderData.customer.street === null ||
      orderData.customer.street.trim() === '' ||
      orderData.customer['postal-code'] === null ||
      orderData.customer['postal-code'].trim() === '' ||
      orderData.customer.city === null ||
      orderData.customer.city.trim() === ''
    ) {
      return res.status(400).json({
        message:
          'Missing data: Email, name, street, postal code or city is missing.',
      });
    }
  
    const newOrder = {
      ...orderData,
      id: (Math.random() * 1000).toString(),
    };
    const orders = await fs.readFile('./data/orders.json', 'utf8');
    const allOrders = JSON.parse(orders);
    allOrders.push(newOrder);
    await fs.writeFile('./data/orders.json', JSON.stringify(allOrders));
    res.status(201).json({ message: 'Order created!' });
  });
  
  app.use((req, res) => {
    if (req.method === 'OPTIONS') {
      return res.sendStatus(200);
    }
  
    res.status(404).json({ message: 'Not found' });
  });

app.listen(5000, ()=>{
    console.log("serve at http://localhost:5000")
}) 