describe("Showcasing intercept and hovering on some elements" , ()=>{
    it("Hovering on an element", () => {
        cy.viewport(1920, 1080)
        cy.visit("http://automationpractice.com/index.php")
        cy.get(".product-container").filter(":visible").first().trigger("mouseover")
        cy.get(".button-container").should("be.visible")
    })

    it.only("Mocking failing requests to see the cannot find stream error", () => {
        cy.intercept("POST", "**protocol-v1-goerli**" ,{
            statusCode: 400,
            body: {
                message:"Woopsie"
            }
        })
        cy.visit("https://user-release-v0-24.dev.superfluid.dev/streams/goerli/0x04c054715203c4c74d0a222c647106728971bbc357de456305fb4ee60a60c72d/26")
        cy.contains("We are unable to fetch the stream details right now").should("be.visible")
    })
})

    it("Dinamicly changing ")