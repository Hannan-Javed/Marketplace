import express, { Request, Response } from 'express';
import { buyers, sellers, products, prices } from './data';
import { Buyer, Seller, Product, Price, buyerSchema, sellerSchema, productSchema, priceSchema } from './models';

const app = express();
app.use(express.json());

app.post('/buyers', async (req: Request, res: Response) => {
    const buyer: Buyer = req.body;
    try {
        const Buyer = await buyerSchema.validate(buyer);
    } catch (error: any) {
        res.status(400).send("error: " + error.message);
        return;
    }
    if (buyers.find((b) => b.id === buyer.id)) {
        res.status(409).send("Error: Buyer already exists");
        return;
    }
    buyers.push(buyer);
    res.status(201).send(buyer);
});

app.post('/sellers', async (req: Request, res: Response) => {
    const seller: Seller = req.body;
    try {
        const Seller = await sellerSchema.validate(seller);
    } catch (error: any) {
        res.status(400).send("error: " + error.message);
        return;
    }
    if (sellers.find((s) => s.id === seller.id)) {
        res.status(409).send("Error: Seller already exists");
        return;
    }
    sellers.push(seller);
    res.status(201).send(seller);
});

app.post('/products', async (req: Request, res: Response) => {
    const product: Product = req.body;
    try {
        const Product = await productSchema.validate(product);
    } catch (error: any) {
        res.status(400).send("error: " + error.message);
        return;
    }
    if (products.find((p) => p.id === product.id)) {
        res.status(409).send("Error: Product already exists");
        return
    }
    products.push(product);
    res.status(201).send(product);
});

app.post('/prices', async (req: Request, res: Response) => {
    const price: Price = req.body;
    try {
        const Price = await priceSchema.validate(price);
    } catch (error: any) {
        res.status(400).send("error: " + error.message);
        return;
    }

    // Check if buyer or seller exists
    if (!((price.persontype === "buyer" && buyers.find((b) => b.id === price.personid) || (price.persontype === "seller" && sellers.find((s) => s.id === price.personid))))) {
        res.status(404).send("Error: Person not found");
        return;
    }
    // Check if product exists
    else if (!products.find((p) => p.id === price.productid)) {
        res.status(404).send("Error: Product not found");
        return;
    }
    // Check if price already exists
    else if (prices.find((p) => p.priceid === price.priceid)) {
        const existingPrice = prices.find((p) => p.priceid === price.priceid);
        // if price exists, update price
        if (existingPrice) {
            existingPrice.price = price.price;
            res.status(200).send(existingPrice);
            return;
        } else {
            res.status(404).send("Error: Price not found");
            return;
        }
    }
    prices.push(price);
    res.status(201).send(price);
});

app.get('/buyers', (req: Request, res: Response) => {
    res.send(buyers);
});

app.get('/sellers', (req: Request, res: Response) => {
  res.send(sellers);
});

app.get('/products', (req: Request, res: Response) => {
  res.send(products);
});

app.get('/prices', (req: Request, res: Response) => {
  res.send(prices);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));