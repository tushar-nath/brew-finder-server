import { Schema, model } from 'mongoose'
import { ICoffeeShop } from '../types'

const coffeeShopSchema = new Schema<ICoffeeShop>({
  name: { type: String, required: true },
  location: {
    address: { type: String, required: true },
    latitude: { type: Number, required: true },
    longitude: { type: Number, required: true },
  },
  rating: { type: Number, required: true },
  products: [
    {
      name: { type: String, required: true },
      price: { type: Number, required: true },
      category: { type: String, required: true },
    },
  ],
})

const CoffeeShop = model<ICoffeeShop>('CoffeeShop', coffeeShopSchema)

export default CoffeeShop
