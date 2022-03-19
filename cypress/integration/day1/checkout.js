import {BasePage} from "../../pageOvjects/BasePage";
import {ProductPage} from "../../pageOvjects/Pages/ProductPage";
import {CartPage} from "../../pageOvjects/Pages/CartPage";

describe("Test cases with buying and adding ptoducts to cart" , () => {
    it("Adding an item to to the cart", () => {
        BasePage.loginWithoutUi()
        ProductPage.addFirstItemToTheCart()
        ProductPage.goToCart()
        CartPage.verifyLastAddedItem()
    })
})