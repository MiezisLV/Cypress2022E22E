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

    it("Add to cart buttons turn into remove button" , () => {
        BasePage.loginWithoutUi()
        ProductPage.addFirstItemToTheCart()
        ProductPage.verifyRemoveButton()
    })

    it("Sorting items by low to high prices" , () => {
        BasePage.loginWithoutUi()
        ProductPage.sortProductsBy("lohi")
        ProductPage.verifyLowToHighPrices()
    })

    it("Sort items by high to low prices" , () =>{
        BasePage.loginWithoutUi()
        ProductPage.sortProductsBy("hilo")
        ProductPage.verifyHighToLow()
    })

    it("Removing items from the cart", () => {
        CartPage.setupForCartsTests()
        CartPage.removeAllItems()
    })

    it.only("Doing checkout with Bob" , () =>{
        CartPage.setupForCartsTests()
        CartPage.continueCheckOut()
        CartPage.inputUserDataAndSubmit("bob")
        CartPage.verifyTotalPrice()
        CartPage.finishCheckOut()
        CartPage.verifyThankYouMessage()
        //dont forget to remove dollar signs
        //use parseFloat(string) to get a float instead os string
        //put in array or count up in a variable
        //sum of array if needed
        //get the total price element
        //compare the text of the sum of items
        //continue button, click it
        //Thank You for Your order message make sure it is visible
    })

    it("Doing checkout with Alice" , () =>{

    })
})