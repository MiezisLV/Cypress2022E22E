import {BasePage} from "../BasePage";

const INVENTORY_CONTAINER = "#inventory_container"
const ITEM_NAME = ".inventory_item_name"
const ADD_TO_CART_BUTTON = "[data-test^=add-to-cart]"
const CART_BUTTON = "#shopping_cart_container"
const SORT_BUTTON = ".product_sort_container"
const ITEM_PRICES = ".inventory_item_price"

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

    static verifyRemoveButton() {
        cy.get(ADD_TO_CART_BUTTON).first().should("have.text","Remove").and("have.css","color","rgp(71, 76, 85)")
    }

    static sortProductsBy(option){
        this.selectOption(SORT_BUTTON,option)
    }

    static verifyLowToHighPrices(){
        let priceArray = []
        cy.get(ITEM_PRICES).then(product => {
            priceArray.push((product.text().replace("$","")))
            console.log(priceArray)
        })
        cy.wrap(priceArray).then(array => {
            let expectedArray = [...array].sort( (a, b) => a -b)
            expect(expectedArray).to.deep.equal(array)
        })
        //let expetctedArray = priceArray.sort()
    }
    static verifyHighToLow(){
        let priceArray = []
        cy.get(ITEM_PRICES).then(product => {
            priceArray.push((product.text().replace("$","")))
            console.log(priceArray)
        })
        cy.wrap(priceArray).then(array => {
            let expectedArray = [...array].sort( (a, b) => b -a)
            expect(expectedArray).to.deep.equal(array)
        })
    }
}