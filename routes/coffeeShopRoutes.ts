import { Router } from 'express'
import { CoffeeShopHandler } from '../handlers/coffeeShopHandler'

const router = Router()

router.post('/', CoffeeShopHandler.addCoffeeShop)
router.get('/:id', CoffeeShopHandler.getCoffeeShopById)
router.get('/', CoffeeShopHandler.listCoffeeShops)
router.put('/:id', CoffeeShopHandler.updateCoffeeShop)
router.delete('/:id', CoffeeShopHandler.deleteCoffeeShop)

export default router
