import CoffeeShop from '../models/coffeeModelShop'
import { ICoffeeShop } from '../types'
import clientPromise from '../lib/mongo'

export class CoffeeShopService {
  static async addCoffeeShop(data: ICoffeeShop): Promise<ICoffeeShop> {
    await clientPromise
    const coffeeShop = new CoffeeShop(data)
    return coffeeShop.save()
  }

  static async getCoffeeShopById(id: string): Promise<ICoffeeShop | null> {
    await clientPromise
    return CoffeeShop.findById(id).exec()
  }

  static async listCoffeeShops(): Promise<ICoffeeShop[]> {
    await clientPromise
    return CoffeeShop.find({}, { products: 0 }).exec()
  }

  static async updateCoffeeShop(
    id: string,
    updates: Partial<ICoffeeShop>
  ): Promise<ICoffeeShop | null> {
    await clientPromise
    return CoffeeShop.findByIdAndUpdate(id, updates, { new: true }).exec()
  }

  static async deleteCoffeeShop(id: string): Promise<void> {
    await clientPromise
    await CoffeeShop.findByIdAndDelete(id).exec()
  }
}
