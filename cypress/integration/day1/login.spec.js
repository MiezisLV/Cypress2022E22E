import {LoginPage} from "../../pageOvjects/Pages/LoginPage";
import {BasePage} from "../../pageOvjects/BasePage";
import {ProductPage} from "../../pageOvjects/Pages/ProductPage";


describe("Login test cases" , () => {
    it("Logging in with a valid user" , ()=> {
        LoginPage.openLoginPage()
        LoginPage.inputUsername("standard_user")
        LoginPage.inputPasswordAndSubmit()
        ProductPage.inventoryContainerIsVisible()
    })

    it("Trying to log in with an invalid user" , () => {
        LoginPage.openLoginPage()
        LoginPage.inputUsername("RandomNotRealUser")
        LoginPage.inputPasswordAndSubmit()
        LoginPage.verifyErrorMessage("Epic sadface: Username and password do not match any user in this service")
    })

    it("Trying to log in without any credential input" , () => {
        LoginPage.openLoginPage()
        LoginPage.clickSubmitButton()
        LoginPage.verifyErrorMessage("Epic sadface: Username is required")
    })

    it("Trying to log in without inputting password" , () => {
        LoginPage.openLoginPage()
        LoginPage.inputUsername("RandomNotRealUser")
        LoginPage.clickSubmitButton()
        LoginPage.verifyErrorMessage("Epic sadface: Password is required")
    })

    it("Trying to log in with a locked out user" , () => {
        LoginPage.openLoginPage()
        LoginPage.inputUsername("locked_out_user")
        LoginPage.inputPasswordAndSubmit()
        LoginPage.verifyErrorMessage("Epic sadface: Sorry, this user has been locked out.")
    })

    it("Closing the error message" , () => {
        LoginPage.clickSubmitButton()
        LoginPage.closeAndVerifyNoErrorMessage()
    })

     it("User with cookies is logged in", () => {
         BasePage.loginWithoutUi()
         ProductPage.inventoryContainerIsVisible()
     })

})
