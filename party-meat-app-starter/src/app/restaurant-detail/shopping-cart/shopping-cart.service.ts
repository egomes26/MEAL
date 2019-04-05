import { CarItem } from "./cart-item.model";
import { MenuItem } from "../menu-item/menu-item.model";
import 'rxjs/add/operator/map'

export class ShoppingCartService {

    items: CarItem[] = []


    clear() {
        this.items = [];
    }

    addItem(item: MenuItem) {
        let foundItem = this.items.find((mItem) => mItem.menuItem.id === item.id)

        if (foundItem) {
            this.increaseQty(foundItem)
        } else {
            this.items.push(new CarItem(item))
        }
    }

    increaseQty(item: CarItem) {
        item.quantity = item.quantity + 1
    }

    decreaseQty(item: CarItem) {
        item.quantity = item.quantity - 1

        if (item.quantity === 0) {
            this.removeItem(item)
        }
    }

    removeItem(item: CarItem) {
        this.items.splice(this.items.indexOf(item), 1)
    }

    total(): number {
        return this.items.map(item => item.value())
            .reduce((prev, value) => prev + value, 0)
    }

}