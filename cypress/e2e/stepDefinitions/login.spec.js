/// <reference types="cypress" />
import { Given,Then } from "@badeball/cypress-cucumber-preprocessor";


Given("User loaded the url",()=>{
    cy.visit("https://google.com");
})

Then("user print the title of the home page",()=>{
   cy.title().then((title)=>{
        cy.log(title);
   })
})