import {BasePage} from "../BasePage";

const ITEM_NAME = ".inventory_item_name"

export class CartPage extends BasePage {

    static verifyLastAddedItem() {
        cy.get(ITEM_NAME).first().then(el => {
            cy.get("@addedItem").then(addedItem => {
                cy.wrap(el.text()).should("equal",addedItem)
            })

        })
    }
}