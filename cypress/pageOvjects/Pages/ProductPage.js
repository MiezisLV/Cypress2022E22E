import {BasePage} from "../BasePage";

const INVENTORY_CONTAINER = "#inventory_container"
const ITEM_NAME = ".inventory_item_name"
const ADD_TO_CART_BUTTON = "[data-test^=add-to-cart]"
const CART_BUTTON = "#shopping_cart_container"

export class ProductPage extends BasePage {

    static inventoryContainerIsVisible(){
        this.isVisible(INVENTORY_CONTAINER)
    }

    static addFirstItemToTheCart() {
        this.clickFirst(ADD_TO_CART_BUTTON)
        cy.get(ITEM_NAME).first().then(el => {
            cy.wrap(el.text()).as("addedItem")
        })
    }

    static goToCart(){
        this.click(CART_BUTTON)
    }
}