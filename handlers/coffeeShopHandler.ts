import { Request, Response } from 'express'
import { CoffeeShopService } from '../services/coffeeShopService'
import { ICoffeeShop } from '../types'

export class CoffeeShopHandler {
  static async addCoffeeShop(req: Request, res: Response) {
    try {
      const data: ICoffeeShop = req.body
      const coffeeShop = await CoffeeShopService.addCoffeeShop(data)
      res.status(201).json(coffeeShop)
    } catch (error: any) {
      res.status(400).json({ error: error.message })
    }
  }

  static async getCoffeeShopById(req: Request, res: Response) {
    try {
      const id = req.params.id
      const coffeeShop = await CoffeeShopService.getCoffeeShopById(id)
      if (!coffeeShop) {
        res.status(404).json({ message: 'Coffee shop not found' })
      } else {
        res.status(200).json(coffeeShop)
      }
    } catch (error: any) {
      res.status(400).json({ error: error.message })
    }
  }

  static async listCoffeeShops(req: Request, res: Response) {
    try {
      const coffeeShops = await CoffeeShopService.listCoffeeShops()
      res.status(200).json(coffeeShops)
    } catch (error: any) {
      res.status(400).json({ error: error.message })
    }
  }

  static async updateCoffeeShop(req: Request, res: Response) {
    try {
      const id = req.params.id
      const updates: Partial<ICoffeeShop> = req.body
      const coffeeShop = await CoffeeShopService.updateCoffeeShop(id, updates)
      if (!coffeeShop) {
        res.status(404).json({ message: 'Coffee shop not found' })
      } else {
        res.status(200).json(coffeeShop)
      }
    } catch (error: any) {
      res.status(400).json({ error: error.message })
    }
  }

  static async deleteCoffeeShop(req: Request, res: Response) {
    try {
      const id = req.params.id
      await CoffeeShopService.deleteCoffeeShop(id)
      res.status(200).json({ message: 'Coffee shop deleted successfully' })
    } catch (error: any) {
      res.status(400).json({ error: error.message })
    }
  }
}
