import { Document } from 'mongoose'

export interface IProduct {
  name: string
  price: number
  category: string
}

export interface ILocation {
  address: string
  latitude: number
  longitude: number
}

export interface ICoffeeShop extends Document {
  name: string
  location: ILocation
  rating: number
  products: IProduct[]
}
