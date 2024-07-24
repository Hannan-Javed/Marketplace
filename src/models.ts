import { object, string, number } from 'yup';

interface Buyer {
    id: string;
    name: string;
  }
  
  interface Seller {
    id: string;
    name: string;
  }
  
  interface Product {
    id: string;
    name: string;
  }
  
  interface Price {
    priceid: string;
    productid: string;
    persontype: string;
    personid: string;
    price: number;
  }
  
const buyerSchema = object({
    id: string().required(),
    name: string().required(),
});

const sellerSchema = object({
    id: string().required(),
    name: string().required(),
});

const productSchema = object({
    id: string().required(),
    name: string().required(),
});

const priceSchema = object({
    priceid: string().required(),
    productid: string().required(),
    persontype: string().required(),
    personid: string().required(),
    price: number().required(),
});

export { Buyer, Seller, Product, Price, buyerSchema, sellerSchema, productSchema, priceSchema };